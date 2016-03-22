'use strict';
/* global describe, it, after, before, __dirname, global; */
const base = `${__dirname}/../../src`;

const Assert    = require('assert');
const Config    = require(`${base}/config`);
const Core      = require(`${base}/core`);
const Database  = Core.Database;
const Http	    = Core.Http;
const Router    = Core.Router;
const register   = require(`${base}/register/registerModel`);
const md5 = require("crypto-js/md5");

describe('Register API', () => {
	
	let server, host,conn;

	before(function*() {
		let ip = '0.0.0.0', port = Config.server.port;
		host = `http://${ip}:${port}`;
		
		global.database = yield Database.connect();
		conn = global.database.collection('users');
		let router = new Router();
		router.registerResources(Config.resources);
		server = router.start(ip, port);
	});
	
	it('should get a 200 status response and data from registered user by doing a post request to /signup', function*() {
		let request = {
			name: 'name',
			email: 'email',
			password: 'pass'
		};
		let data;
		try {
			var output = yield Http.post(`${host}/signup`,request);
			data = output;
		} catch(e) {
			data = e;
		} finally {
			let result = data.body.data;
			Assert.equal(data.statusCode, 200);
			Assert.equal(result.name, 'name');
			Assert.equal(result.email, 'email');
			Assert.notEqual(data.body.auth_token,undefined);
		}
	});

	it('should get a 400 status response by doing a post request to /signup with empty body', function*() {
		let request = {};
		let data;
		try {
			var output = yield Http.post(`${host}/signup`,request);
			data = output;
		} catch(e) {
			data = e;
		} finally {
			Assert.equal(data.statusCode, 400);
		}
	});	
	
	it('should get a 400 status response by doing a post request to /signup with incomplete body', function*() {
		let request = {name:'name'};
		let data;
		try {
			var output = yield Http.post(`${host}/signup`,request);
			data = output;
		} catch(e) {
			data = e;
		} finally {
			Assert.equal(data.statusCode, 400);
		}
	});	

	it('should get a 200 status response by doing a post request to /login', function*() {
		let request = {
			email: 'email',
			password: 'pass'
		};
		let data;
		try {
			var output = yield Http.post(`${host}/login`,request);
			data = output;
		} catch(e) {
			data = e;
		} finally {
			let result = data.body.data;
			Assert.equal(data.statusCode, 200);
			Assert.equal(result.name, 'name');
			Assert.equal(result.email, 'email');
			Assert.notEqual(data.body.auth_token,undefined);
		}
	});

	it('should get a 400 status response by doing a post request to /login with empty body', function*() {
		let request = {};
		let data;
		try {
			var output = yield Http.post(`${host}/login`,request);
			data = output;
		} catch(e) {
			data = e;
		} finally {
			Assert.equal(data.statusCode, 400);
		}
	});	
	
	it('should get a 400 status response by doing a post request to /login with incomplete body', function*() {
		let request = {email:'email'};
		let data;
		try {
			var output = yield Http.post(`${host}/login`,request);
			data = output;
		} catch(e) {
			data = e;
		} finally {
			Assert.equal(data.statusCode, 400);
		}
	});	

	after(function*() {
		server.close();
		yield conn.remove({});
	});
});