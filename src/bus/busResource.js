'use strict';
/* global analytics; */
const wrap = require('co-express');
const Core = require('../core');
const Database = Core.Database;
const BusDAO = require('./busDAO');
const ItineraryDAO = require('../itinerary/itineraryDAO');
const Analytics = require('../common/analytics');
const LoggerFactory = Core.LoggerFactory;

/**
 * Responsible for Bus search API configuration
 * @class {BusResource}
 */
class BusResource {

	/**
	 * API base path
	 */
	get base() { return '/v3/search'; }
	
	constructor(router) {
		router.get('/:data', wrap(this.getBuses));
	}

	/**
	 * Handles the requests looking for an specific bus line
	 * @param {Object} request - HTTP request data dictionary
	 * @param {Object} response - HTTP response data dictionary
	 * @return {void}
	 */
	*getBuses(request, response) {
		const dao = new BusDAO();
		const searchTerm = request.params.data;
		
		const userAgent = request.headers['user-agent'];
		BusResource.track('REST+Hit', 'REST', userAgent);
		for(let line of searchTerm.split(',')) BusResource.track('REST+Hit', 'Bus Code', line);
		
		let data = yield dao.getByLines(searchTerm.split(','));
		if(data.length>0) response.jsonp(BusResource.prepareForV3(data));
		else {
			data = yield dao.getByOrders(searchTerm.split(','));
			if(data.length>0) response.jsonp(BusResource.prepareForV3(data));
			else {
				let itineraryDao = new ItineraryDAO();
				let lines = (yield itineraryDao.getByKeyword(searchTerm)).map((itinerary) => { return itinerary.line; });
				data = yield dao.getByLines(lines);
				if(data.length>0) response.status(200).jsonp(BusResource.prepareForV3(data));
				else response.status(404).jsonp([]);
			}
		}	
	}
    
    /**
     * Prepares the output data list to fit to v3 API contract
     * @param {Array} data - The bus list data
     * @return {Array}
     */
    static prepareForV3(data) {
        return data.map((bus) => {
            bus.timeStamp = bus.timestamp;
            bus.sense = bus.direction;
            bus.direction = bus.directionDegrees;
            delete bus.timestamp;
            delete bus.directionDegrees;
            delete bus._id;
            return bus;
        });
    }
	
    /**
     * Sends to Google Analytics an event to track the request
     * @param {string} event - Event name
     * @param {string} id - Event ID
     * @param {string} value - Value attached to the event
     * @return {void} 
     */
	static track(event, id, value) {
		let analytics = new Analytics();
		analytics.initialize();
		analytics.trackPage(event, id, value, (error, response) => {
			let log = LoggerFactory.getRuntimeLogger();
			if(error) log.error(`Analytics Error: ${error.toString()}`);
			if(response) log.error(`Analytics response: ${response.toString()}`);
		});
	}
}
module.exports = BusResource;