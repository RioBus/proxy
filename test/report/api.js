'use strict';
/* global describe, it, after, before, __dirname, global; */
const base = `${__dirname}/../../src`;

const Assert    = require('assert');
const Config    = require(`${base}/config`);
const Core      = require(`${base}/core`);
const Database  = Core.Database;
const Http	    = Core.Http;
const Router    = Core.Router;
const Report   = require(`${base}/report/reportModel`);

describe('Report API', () => {
	
	let server, host;
	
	before(function*() {
		let ip = '0.0.0.0', port = Config.server.port;
		host = `http://${ip}:${port}`;
		
		global.database = yield Database.connect();
		let router = new Router();
		router.registerResources(Config.resources);
		server = router.start(ip, port);
	});
	
	it('should post a report from a POST request to /v4/report', function*() {
		let data;
		let obj = {title:'bus report', order: 'C12345', line:'485', message: 'content'};
		try {		
			var output = yield Http.post(`${host}/v4/report`, obj);
			data = output;
		} catch(e) {
			data = e;
		} finally {
            Assert.equal(data.statusCode, 200);
			Assert.equal(data.body instanceof Error, false);
			Assert.notEqual(data.body, undefined);
			Assert.equal(data.body.title, obj.title);
			Assert.equal(data.body.line, obj.line);
			Assert.equal(data.body.order, obj.order);
			Assert.notEqual(data.body.timestamp, undefined);
			Assert.equal(data.body.message, obj.message);
			Assert.notEqual(data.body._id, undefined);					
		}
	});
	
	it('should get a active reports list from a GET request to /v4/report/C12345', function*() {
		let data;
		const obj = {title:'bus report', order: 'C12345', line:'485', message: 'content'};
		try {		
			var output = yield Http.get(`${host}/v4/report/C12345`);
			data = output;
		} catch(e) {
			data = e;
		} finally {
            Assert.equal(data.statusCode, 200);
			Assert.equal(data.body instanceof Array, true);
            Assert.equal(data.body.length, 1);
            let tmp = data.body[0];
			Assert.equal(tmp.title, obj.title);
			Assert.equal(tmp.line, obj.line);
			Assert.equal(tmp.order, obj.order);
			Assert.notEqual(tmp.timestamp, undefined);
			Assert.equal(tmp.message, obj.message);
			Assert.notEqual(tmp._id, undefined);					
		}
	});
	
	it('should fail to post a report due to an unconsistent request to /v4/report', function*() {
		let data;
		let obj = {order: 'C12345', line:'485', message: 'content'};
		try {		
			var output = yield Http.post(`${host}/v4/report`, obj);
			data = JSON.parse(output);
		} catch(e) {
			data = e;
		} finally {
			Assert.equal(data instanceof Error, true);				
		}
	});
	
	after(function*() {
		server.close();
		yield global.database.collection('report').remove({});
	});
});