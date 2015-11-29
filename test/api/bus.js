'use strict';
/* global describe, it, after, before, __dirname, global; */
const base = `${__dirname}/../../src`;

const Assert    = require('assert');
const Core      = require(`${base}/core`);
const Database  = Core.Database;
const Http	    = Core.Http;
const Router    = Core.Router;
const Bus       = require(`${base}/bus/busModel`);

describe('Bus API', () => {
	
	let server, host;
	
	before(function*() {
		let ip = '0.0.0.0', port = 8080;
		host = `http://${ip}:${port}`;
		
		global.database = yield Database.connect();
		yield global.database.collection('bus').insert(new Bus('line', 'order', 0, 0, 20, 30, (new Date()).toDateString(), 'sense'));
		
		let router = new Router();
		router.registerResources(['bus/busResource']);
		server = router.start(ip, port);
	});
	
	it('should get a list with all bus from GET request by v3/search/data', function*() {
		let data;
		try {
			var output = yield Http.get(`${host}/v3/search/line`);
			data = JSON.parse(output);
		} catch(e) {
			data = e;
		} finally {
			Assert.equal(data instanceof Array, true);
			Assert.equal(data.length, 1);
			Assert.equal(data[0].line, 'line');
			Assert.equal(data[0].order, 'order');
			Assert.equal(data[0].speed, 0);
			Assert.equal(data[0].direction, 0);
			Assert.equal(data[0].sense, 'sense');
		}
	});
	
	after(function*() {
		server.close();
		yield global.database.collection('bus').remove({});
	});
});