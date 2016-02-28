'use strict';
/* global describe, it, before, global, __dirname, after; */
const base = `${__dirname}/../../src`;

const Assert     = require('assert');
const Database   = require(`${base}/core`).Database;
const Reclaim    = require(`${base}/reclaim/reclaimModel`);
const ReclaimDAO = require(`${base}/reclaim/reclaimDAO`);

let dao, saved, col;

describe('ReclaimDAO', () => {
	
	before(function*() {
		let conn = yield Database.connect();
		col = conn.collection('reclaim');
		dao = new ReclaimDAO(conn);
	});
	
	it('should save the reclaim to the database', function*() {
		let result;
		try {
			result = yield dao.save(new Reclaim('title', 'line', new Date(), 'text'));
		}
		catch(error) {
			result = error;
		}
		finally {
            Assert.notEqual(result._id, undefined);
			Assert.equal(result.title, 'title');
			Assert.equal(result.line, 'line');
			Assert.equal(result.date instanceof Date, true);
			Assert.equal(result.text, 'text');
		}
		
	});
	
	it('should fail to save the data with unconsistent data', function*() {
		let result;
		try {
			result = yield dao.save(new Reclaim('title', 'line', 'not a Date object', 'text'));
		}
		catch(error) {
			result = error;
		}
		finally {
            Assert.equal(result instanceof Error, true);
		}
		
	});
		
	after(function*() { yield col.remove({}); });
});