'use strict';
/* global database; */

class BusStopDAO {
	
	constructor(connection) {
		if(!connection) connection = database;
		this.collection = connection.collection('bus_stop');
	}
	
	getAll() {
		return this.collection.find({});
	}
	
	getByLine(line) {
		return this.collection.findOne({line:line});
	}
}
module.exports = BusStopDAO;