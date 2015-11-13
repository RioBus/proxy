'use strict';
/* global database; */

class ItineraryDAO {
	
	constructor(connection) {
		if(!connection) connection = database;
		this.collection = connection.collection('itinerary');
	}
	
	getAll() {
		return this.collection.find({});
	}
	
	getByKeyword(keyword){
		return this.collection.find({$text:{$search:keyword}});
	}
	
	getByLine(line){
		return this.collection.find({line:line});
	}
}
module.exports = ItineraryDAO;