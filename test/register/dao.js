'use strict';
/* global describe, it, before, global, __dirname, after; */
const base = `${__dirname}/../../src`;

const Assert       = require('assert');
const Database     = require(`${base}/core`).Database;
const Register    = require(`${base}/register/registerModel`);
const RegisterDAO = require(`${base}/register/registerDAO`);

let dao,col;

describe('RegisterDAO', () => {
	
	before(function*() {
		let conn = yield Database.connect();
		col = conn.collection('users');
		dao = new RegisterDAO(conn);

	});
	
	it('should insert new register on database', function*() {
		let reg = new Register('name','email','pass');
		let data = yield dao.save(reg);
		Assert.notEqual(data._id, undefined);
		
	});

	after(function*() {
		yield col.remove({});
	});
});