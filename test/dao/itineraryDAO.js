'use strict';
/* global describe, it, before, global, __dirname, after; */
const base = `${__dirname}/../../src`;

const Assert       = require('assert');
const Database     = require(`${base}/core`).Database;
const Itinerary    = require(`${base}/itinerary/itineraryModel`);
const ItineraryDAO = require(`${base}/itinerary/itineraryDAO`);

let dao, saved, col;

describe('ItineraryDAO', () => {
	
	before(function*() {
		let conn = yield Database.connect();
		col = conn.collection('itinerary');
		dao = new ItineraryDAO(conn);
		saved = yield col.insert(new Itinerary('line', 'description', 'agency', 'keyword', []));
	});
	
	it('should find all the itineraries', function*() {
		let itinerary = yield dao.getAll();
		Assert(itinerary instanceof Array);
		Assert.notEqual(itinerary.length, 0);
	});
		
	it('should find the itinerary with the line equal to \'line\'', function*() {
		let itinerary = yield dao.getByLine(saved.line);
		Assert.equal(itinerary.line, saved.line);
	});
	
	it('should find the itinerary with the keyword equal to \'keyword\'', function*() {
		let itinerary = dao.getByKeyword(saved.keywords);
		Assert.notEqual(itinerary.length, 0);
	});
		
	after(function*() {
		yield col.remove({});
	});
});