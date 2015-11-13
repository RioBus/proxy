'use strict';
/* global database; */

class BusDAO {
	
	constructor(connection) {
		if(!connection) connection = database;
		this.bus = connection.collection('bus');
	}
	
	getAll() {
		return this.bus.find({});
	}
	
	getByLines(lines){
		return this.bus.find({line:{$in:lines}});
	}
	
	getByOrders(orders){
		return this.bus.find({order:{$in:orders}});
	}
}
module.exports = BusDAO;