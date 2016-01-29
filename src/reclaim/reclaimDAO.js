'use strict';
/* global database; */

/**
 * Reclaim Data Access Object
 * @class {ReclaimDAO}
 */
class ReclaimDAO {
	
	constructor(connection) {
		if(!connection) connection = database;
		this.reclaim = connection.collection('reclaim');
	}
	
	/**
	 * Put reclaim on database
	 * @param {Object} order
	 * @return {Object}
	 */
	save(reclaim){
		return this.reclaim.insert(reclaim);
	}
}
module.exports = ReclaimDAO;