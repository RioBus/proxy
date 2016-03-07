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
			data = output;
		} catch(e) {
			data = e;
		} finally {
			Assert.equal(data.statusCode, 200);
			Assert.equal(data.body.sign, saved.sign);
			Assert.equal(data.body.fabrication, saved.fabrication);
			Assert.equal(data.body.fuel, saved.fuel);
			Assert.equal(data.body.plant, saved.plant);
			Assert.equal(data.body.model, saved.model);
			Assert.equal(data.body.body, saved.body);
			Assert.equal(data.body.frame, saved.frame);
			Assert.equal(data.body.frameNumber, saved.frameNumber);
			Assert.equal(data.body.order, saved.order);
			Assert.equal(data.body.features, saved.features);					
			Assert.equal(data.body.inclusionDate, saved.inclusionDate);
			Assert.equal(data.body._id, saved._id);
		}
	});
    
	after(function*() {
		server.close();
		yield global.database.collection('bus-info').remove({});
	});
});