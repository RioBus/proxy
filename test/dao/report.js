'use strict';
/* global describe, it, before, global, __dirname, after; */
const base = `${__dirname}/../../src`;

const Assert    = require('assert');
const Database  = require(`${base}/core`).Database;
const Report    = require(`${base}/report/reportModel`);
const ReportDAO = require(`${base}/report/reportDAO`);

let dao, col;

describe('ReportDAO', () => {
	
	before(function*() {
		let conn = yield Database.connect();
		col = conn.collection('report');
		dao = new ReportDAO(conn);
	});
	
	it('should save the reclaim to the database', function*() {
		let result;
		try {
			result = yield dao.save(new Report('title', 'line', new Date(), 'text'));
		} catch(error) {
			result = error;
		} finally {
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
			result = yield dao.save(new Report('title', 'line', 'not a Date object', 'text'));
		} catch(error) {
			result = error;
		} finally {
            Assert.equal(result instanceof Error, true);
		}
		
	});
		
	after(function*() { yield col.remove({}); });
});