'use strict';
/* global database; */

/**
 * Report Data Access Object
 * @class {ReportDAO}
 */
class ReportDAO {
	
	constructor(connection) {
		if(!connection) connection = database;
		this.collection = connection.collection('report');
	}
	
	/**
	 * Save report on database
	 * @param {Report} data - Data to be saved 
	 * @return {Object}
	 */
	save(data) {
		return this.collection.insert(data);
	}
	
	/**
	 * Get all active reports stored for a given order
	 * @param {string} order - Bus order to search for 
	 * @return {Report[]}
	 */
    getActiveByOrder(order) {
        return this.collection.find({ order: order, resolvedTimestamp: null });
    }
}
module.exports = ReportDAO;