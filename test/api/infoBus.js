'use strict';
/* global describe, it, after, before, __dirname, global; */
const base = `${__dirname}/../../src`;

const Assert    = require('assert');
const Config    = require(`${base}/config`);
const Core      = require(`${base}/core`);
const Database  = Core.Database;
const Http	    = Core.Http;
const Router    = Core.Router;
const InfoBus   = require(`${base}/infoBus/infoBusModel`);

describe('InfoBus API', () => {
	
	let server, host;
	
	before(function*() {
		let ip = '0.0.0.0', port = 8080;
		host = `http://${ip}:${port}`;
		
		global.database = yield Database.connect();
		let date = new Date();
		yield global.database.collection('info-bus').insert(new InfoBus('sign', 0, 'fuel', 10, 'model', 'body', 'frame', 'frameNumber', 'order', 'features', date));
		
		let router = new Router();
		router.registerResources(Config.resources);
		server = router.start(ip, port);
	});
	
	it('should get a info about bus from a GET request to /v4/infobus/order', function*() {
		let data;
		try {
			var output = yield Http.get(`${host}/v4/infobus/order`);
			data = JSON.parse(output);
		} catch(e) {
			data = JSON.parse(e.response.body);
		} finally {
			Assert.equal(data.sign, 'sign');
			Assert.equal(data.fabrication, 0);
			Assert.equal(data.fuel, 'fuel');
			Assert.equal(data.plant, 10);
			Assert.equal(data.model, 'model');
			Assert.equal(data.body, 'body');
			Assert.equal(data.frame, 'frame');
			Assert.equal(data.frameNumber, 'frameNumber');
			Assert.equal(data.order, 'order');
			Assert.equal(data.features, 'features');					
		}
	});


	
	after(function*() {
		server.close();
		yield global.database.collection('info-bus').remove({});
	});
});