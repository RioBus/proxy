'use strict';
/* global database; */

class ItineraryDAO {
	
	constructor(connection) {
		if(!connection) connection = database;
		this.collection = connection.collection('itinerary');
	}
	
	getHeaders() {
		return this.collection.find({}, { fields: ['line', 'description'], sort: { line: 1 } });
	}
	
	getByKeyword(keyword){
		return this.collection.find({keywords: new RegExp(keyword) });
	}
	
	getByLine(line, fields){
        return (!fields)? this.collection.findOne({line:line}) : this.collection.findOne({line:line},{fields:fields});
	}
}
module.exports = ItineraryDAO;