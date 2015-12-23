'use strict';
/* global database; */

/**
 * InfoBus Data Access Object
 * @class {InfoBusDAO}
 */
class InfoBusDAO {
	
	constructor(connection) {
		if(!connection) connection = database;
		this.infoBus = connection.collection('info-bus');
	}
	
	/**
	 * Gets information about bus instance with the given order
	 * @param {String} order
	 * @return {InfoBus}
	 */
	getByOrder(order){
		return this.infoBus.findOne({order:new RegExp(order)});
	}
}
module.exports = InfoBusDAO;