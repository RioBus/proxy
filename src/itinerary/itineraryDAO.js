'use strict';
/* global database; */

class ItineraryDAO {
	
	constructor(connection) {
		if(!connection) connection = database;
		this.collection = connection.collection('itinerary', { indexes: [{ fields: { line: 1, description: 1, keywords: 1 } }] });
	}
	
	getHeaders() {
		return this.collection.find({}, { fields: ['line', 'description', 'keywords'], sort: { line: 1 } });
	}
	
	getByKeyword(keyword){
		return this.collection.find({keywords: new RegExp(keyword) });
	}
	
	getByLine(line, fields){
        return (!fields)? this.collection.findOne({line:line}) : this.collection.findOne({line:line},{fields:fields});
	}
}
module.exports = ItineraryDAO;