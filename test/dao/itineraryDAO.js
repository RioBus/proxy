'use strict';
/* global describe, it, before, global, __dirname, after; */
require('co-mocha')(require('mocha'));
const base = `${__dirname}/../../src`;

const Assert = require('assert');
const Database = require(`${base}/core`).Database;
const Itinerary = require(`${base}/model/itinerary`);
const ItineraryDAO = require(`${base}/dao/itineraryDAO`);

var dao, saved, col;

describe('ItineraryDAO', () => {
	
	before(function*() {
		let conn = yield Database.connect();
		col = conn.collection('itinerary');
		dao = new ItineraryDAO(conn);
		saved = yield col.insert(new Itinerary('line', 'description', 'agency', 'keyword', []));
	});
	
	it('should find the itinerary with the line equal to \'line\'', function*(done) {
		//console.log();
		let itinerary = dao.getByLine(saved.line);
		console.log(itinerary);
		Assert.deepEqual(itinerary, saved);
		done();
	});
	
	it('should find the itinerary with the keyword equal to \'keyword\'', function*(done) {
		
	});
	
	it('should find all the itineraries', function*(done) {
		
	});
	
	
	
	after(function*() {
		yield col.remove({});
	});
});