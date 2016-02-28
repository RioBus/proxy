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
	 * Save reclaim on database
	 * @param {Reclaim} data - Data to be saved 
	 * @return {Object}
	 */
	save(data){
		return this.reclaim.insert(data);
	}
}
module.exports = ReclaimDAO;