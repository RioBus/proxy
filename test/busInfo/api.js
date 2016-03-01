'use strict';
/* global describe, it, after, before, __dirname, global; */
const base = `${__dirname}/../../src`;

const Assert    = require('assert');
const Config    = require(`${base}/config`);
const Core      = require(`${base}/core`);
const Database  = Core.Database;
const Http	    = Core.Http;
const Router    = Core.Router;
const BusInfo   = require(`${base}/busInfo/busInfoModel`);

describe('BusInfo API', () => {
	
	let server, host, saved;
	
	before(function*() {
		let ip = '0.0.0.0', port = 8080;
		host = `http://${ip}:${port}`;
		
		global.database = yield Database.connect();
        saved = yield global.database.collection('bus-info').insert(new BusInfo('sign', 0, 'fuel', 10, 'model', 'body', 'frame', 'frameNumber', 'order', 'features', new Date()));
		
		let router = new Router();
		router.registerResources(Config.resources);
		server = router.start(ip, port);
	});
	
	it('should get a info about bus from a GET request to /v4/bus/info/order', function*() {
		let data;
		try {
			var output = yield Http.get(`${host}/v4/bus/info/order`);
			data = JSON.parse(output);
		} catch(e) {
			data = JSON.parse(e.response.body);
		} finally {
			Assert.equal(data.sign, saved.sign);
			Assert.equal(data.fabrication, saved.fabrication);
			Assert.equal(data.fuel, saved.fuel);
			Assert.equal(data.plant, saved.plant);
			Assert.equal(data.model, saved.model);
			Assert.equal(data.body, saved.body);
			Assert.equal(data.frame, saved.frame);
			Assert.equal(data.frameNumber, saved.frameNumber);
			Assert.equal(data.order, saved.order);
			Assert.equal(data.features, saved.features);					
			Assert.equal(data.inclusionDate, saved.inclusionDate);
			Assert.equal(data._id, saved._id);
		}
	});
    
	after(function*() {
		server.close();
		yield global.database.collection('bus-info').remove({});
	});
});