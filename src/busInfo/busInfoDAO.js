'use strict';
/* global database; */

/**
 * BusInfo Data Access Object
 * @class {BusInfoDAO}
 */
class BusInfoDAO {
	
	constructor(connection) {
		if(!connection) connection = database;
		this.collection = connection.collection('bus_info');
	}
	
	/**
	 * Gets information about bus instance with the given order
	 * @param {String} order
	 * @return {BusInfo}
	 */
	getByOrder(order){
		return this.collection.findOne({ order: new RegExp(order) });
	}
}
module.exports = BusInfoDAO;