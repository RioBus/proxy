'use strict';
/* global database; */

var queryFields = {
	_id: false,
	latitude: true,
	longitude: true,
	line: true,
	order: true,
	speed: true,
	direction: true,
    directionDegrees: true,
	timestamp: true
};

/**
 * Bus Data Access Object
 * @class {BusDAO}
 */
class BusDAO {
	
	constructor(connection) {
		if(!connection) connection = database;
		this.bus = connection.collection('bus');
	}
	
	/**
	 * Gets all bus instances from database
	 * @return {Bus[]}
	 */
	getAll() {
		return this.bus.find({}, { fields: queryFields });
	}
	
	/**
	 * Gets all bus instances with the given lines
	 * @param {String[]} lines - bus lines
	 * @return {Bus[]}
	 */
	getByLines(lines){
		return this.bus.find({ line: { $in: lines } }, { fields: queryFields });
	}
	
	/**
	 * Gets all bus instances with the given orders
	 * @param {String[]} orders - bus orders
	 * @return {Bus[]}
	 */
	getByOrders(orders){
		return this.bus.find({ order: { $in: orders } }, { fields: queryFields });
	}
}
module.exports = BusDAO;