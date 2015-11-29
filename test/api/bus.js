'use strict';
/* global describe, it, after, before, __dirname, global; */
const base = `${__dirname}/../../src`;

const Assert    = require('assert');
const Core      = require(`${base}/core`);
const Database  = Core.Database;
const Http	    = Core.Http;
const Router    = Core.Router;
const Bus = require(`${base}/bus/busModel`);

describe('Bus API', () => {
	
	let server, host;
	
	before(function*() {
		let ip = '0.0.0.0', port = 8080;
		host = `http://${ip}:${port}`;
		
		global.database = yield Database.connect();
		let bus = new Bus('line', 'order', 0, 0, 20, 30, (new Date()).toDateString(), 'sense');
		yield global.database.collection('bus').insert(bus);
		
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
			Assert.equal(data[0].line, bus.line);
			Assert.equal(data[0].order, bus.order);
			Assert.equal(data[0].speed, bus.speed);
			Assert.equal(data[0].direction, bus.direction);
			Assert.equal(data[0].timeStamp, bus.timeStamp);
			Assert.equal(data[0].sense, bus.sense);
		}
	});
	
	after(function*() {
		server.close();
		yield global.database.collection('bus').remove({});
	});
});