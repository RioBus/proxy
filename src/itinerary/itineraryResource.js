'use strict';
const wrap = require('co-express');
const Core = require('../core');
const Database = Core.Database;
const Itinerary = require('./itineraryModel');
const ItineraryDAO = require('./itineraryDAO');

class ItineraryResource {

	get base() { return '/'; }
	
	constructor(router) {
		router.get('/v3/itinerary', wrap(this.getMainRoute));
		router.get('/v3/itinerary/:line', wrap(this.oldGetByLine));
		router.get('/v4/itinerary/:line', wrap(this.getByLine));
	}

	*getMainRoute(request, response) {
		const dao = new ItineraryDAO();
		const data = yield dao.getHeaders();
        for(let i=0;i<data.length; i++) delete data[i]._id;
		response.jsonp(data);	
	}

	*getByLine(request, response) {
		const dao = new ItineraryDAO();
		const data = yield dao.getByLine(request.params.line, ['line', 'description', 'agency', 'keywords', 'spots', 'streets']);
        delete data._id;
		response.jsonp(data);	
	}

	*oldGetByLine(request, response) {
		const dao = new ItineraryDAO();
		const data = yield dao.getByLine(request.params.line, ['line', 'description', 'agency', 'keywords', 'spots']);
        delete data._id;
		response.jsonp(data);	
	}
}
module.exports = ItineraryResource;