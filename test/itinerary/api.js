'use strict';
/* global describe, it, after, before, __dirname, global; */
const base = `${__dirname}/../../src`;

const Assert    = require('assert');
const Config    = require(`${base}/config`);
const Core      = require(`${base}/core`);
const Database  = Core.Database;
const Http	    = Core.Http;
const Router    = Core.Router;
const Itinerary = require(`${base}/itinerary/itineraryModel`);

describe('Itinerary API', () => {
	
	let server, host;
	
	before(function*() {
		let ip = '0.0.0.0', port = 8080;
		host = `http://${ip}:${port}`;
		
		global.database = yield Database.connect();
		yield global.database.collection('itinerary').insert(new Itinerary('lineCode', 'description', 'agency', 'keywords', []));
		
		let router = new Router();
		router.registerResources(Config.resources);
		server = router.start(ip, port);
	});
	
	it('should get a list with all itineraries by doing a GET request to /v3/itinerary', function*() {
		let data;
		try {
			var output = yield Http.get(`${host}/v3/itinerary`);
			data = output;
		} catch(e) {
			data = e;
		} finally {
            Assert.equal(data.statusCode, 200);
			Assert.equal(data.body instanceof Array, true);
			Assert.equal(data.body.length, 1);
			Assert.equal(data.body[0].line, 'lineCode');
			Assert.equal(data.body[0].description, 'description');
			Assert.equal(data.body[0].keywords, undefined);
			Assert.equal(data.body[0].agency, undefined);
			Assert.equal(data.body[0].spots, undefined);
            Assert.equal(data.body[0].strets, undefined);
            Assert.equal(data.body[0]._id, undefined);
		}
	});
	
	it('should get a single itinerary by doing a GET request to /v3/itinerary/lineCode', function*() {
		let data;
		try {
			var output = yield Http.get(`${host}/v3/itinerary/lineCode`);
			data = output;
		} catch(e) {
			data = e;
		} finally {
			Assert.equal(data.statusCode, 200);
			Assert.equal(data.body.line, 'lineCode');
			Assert.equal(data.body.description, 'description');
			Assert.equal(data.body.agency, 'agency');
			Assert.equal(data.body.keywords, 'keywords');
            Assert.equal(data.body.spots instanceof Array, true);
			Assert.equal(data.body.streets, undefined);
            Assert.equal(data.body._id, undefined);
		}
	});
	
	it('should get a single itinerary by doing a GET request to /v4/itinerary/lineCode', function*() {
		let data;
		try {
			var output = yield Http.get(`${host}/v4/itinerary/lineCode`);
			data = output;
		} catch(e) {
			data = e;
		} finally {
			Assert.equal(data.statusCode, 200);
			Assert.equal(data.body.line, 'lineCode');
			Assert.equal(data.body.description, 'description');
			Assert.equal(data.body.agency, 'agency');
			Assert.equal(data.body.keywords, 'keywords');
            Assert.equal(data.body.spots instanceof Array, true);
            Assert.equal(data.body.streets instanceof Array, true);
            Assert.equal(data.body._id, undefined);
		}
	});
	
	after(function*() {
		server.close();
		yield global.database.collection('itinerary').remove({});
	});
});