'use strict';
/* global describe, it, before, global, __dirname, after; */
require('co-mocha')(require('mocha'));
const base = `${__dirname}/../../src`;

const Assert = require('assert');
const Database = require(`${base}/core`).Database;
const Bus = require(`${base}/model/bus`);
const BusDAO = require(`${base}/dao/busDAO`);

var dao, saved, col;

describe('BusDAO', () => {
	
	before(function*() {
		let conn = yield Database.connect();
		col = conn.collection('bus');
		dao = new BusDAO(conn);
		saved = yield col.insert(new Bus('line', 'order', 0, 0, 23, 45, (new Date()).toDateString(), 'sense'));
	});
	
	it('should find all buses from the collection', function*(done) {
		let data = yield dao.getAll();	
		Assert(data instanceof Array);
		Assert.equal(data.length, 1);			
		done();
	});
	
	it('should find all buses with the line equal to \'line\'', function*(done) {
		let data = yield dao.getByLines([saved.line]);	
		Assert(data instanceof Array);
		Assert.equal(data.length, 1);			
		done();
	});
	
	it('should find all buses with the order equal to \'order\'', function*(done) {
		let data = yield dao.getByOrders([saved.order]);	
		Assert(data instanceof Array);
		Assert.equal(data.length, 1);			
		done();
	});
	
	after(function*() {
		yield col.remove({});
	});
});