'use strict';
/* global describe, it, after, before, __dirname, global; */
const base = `${__dirname}/../../src`;

const Assert    = require('assert');
const Config    = require(`${base}/config`);
const Core      = require(`${base}/core`);
const Database  = Core.Database;
const Http	    = Core.Http;
const Router    = Core.Router;
const BusStop   = require(`${base}/busStop/busStopModel`);

describe('BusStop API', () => {
	
	let server, host;
	
	before(function*() {
		let ip = '0.0.0.0', port = 8080;
		host = `http://${ip}:${port}`;
		
		global.database = yield Database.connect();
		yield global.database.collection('bus-stop').insert(new BusStop('lineCode', 'description', 'agency', []));
		
		let router = new Router();
		router.registerResources(Config.resources);
		server = router.start(ip, port);
	});
	
	it('should get a single bus stop by doing a GET request to /v3/bus/stop/lineCode', function*() {
		let data;
		try {
			var output = yield Http.get(`${host}/v3/bus/stop/lineCode`);
			data = output;
		} catch(e) {
			data = e;
		} finally {
			Assert.equal(data.statusCode, 200);
			Assert.equal(data.body.line, 'lineCode');
			Assert.equal(data.body.description, 'description');
			Assert.equal(data.body.agency, 'agency');
		}
	});
	
	after(function*() {
		server.close();
		yield global.database.collection('bus-stop').remove({});
	});
});