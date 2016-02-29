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
		let ip = '0.0.0.0', port = 8080;
		host = `http://${ip}:${port}`;
		
		global.database = yield Database.connect();
		let router = new Router();
		router.registerResources(Config.resources);
		server = router.start(ip, port);
	});
	
	it('should post a report from a POST request to /v4/report', function*() {
		
		let data;
		let obj = {title:'bus report', line:'485', date: (new Date()).toISOString(), text:'content' };
		try {		
			var output = yield Http.post(`${host}/v4/report`, obj);
			data = JSON.parse(output);
		} catch(e) {
			data = JSON.parse(e.response.body);
		} finally {
			Assert.equal(data instanceof Error, false);
			Assert.notEqual(data, undefined);
			Assert.equal(data.title, obj.title);
			Assert.equal(data.line, obj.line);
			Assert.equal(data.date, obj.date);
			Assert.equal(data.text, obj.text);
			Assert.notEqual(data._id, undefined);					
		}
	});


	
	after(function*() {
		server.close();
		yield global.database.collection('report').remove({});
	});
});