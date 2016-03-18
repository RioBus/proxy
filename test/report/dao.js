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
	
	it('should save the report to the database', function*() {
		let result;
		try {
			result = yield dao.save(new Report('line', 'order', 'title', 'text content'));
		} catch(error) {
			result = error;
		} finally {
            Assert.notEqual(result._id, undefined);
			Assert.equal(result.title, 'title');
			Assert.equal(result.line, 'line');
			Assert.equal(result.order, 'order');
			Assert.equal(result.message, 'text content');
			Assert.equal(result.timestamp instanceof Date, true);
		}
	});
	
	it('should get the identified active reports from the database', function*() {
		let result;
		try {
			result = yield dao.getActiveByOrder('order');
		} catch(error) {
			result = error;
		} finally {
            Assert.equal(result instanceof Array, true);
            Assert.equal(result.length, 1);
            let tmp = result[0];
            Assert.notEqual(tmp._id, undefined);
			Assert.equal(tmp.title, 'title');
			Assert.equal(tmp.line, 'line');
			Assert.equal(tmp.order, 'order');
			Assert.equal(tmp.message, 'text content');
			Assert.equal(tmp.timestamp instanceof Date, true);
		}
	});
	
	it('should fail to save the report with unconsistent data', function*() {
		let result;
		try {
			result = yield dao.save(new Report('line', 'order', 'title', 'text content', 'not a Date string'));
		} catch(error) {
			result = error;
		} finally {
            Assert.equal(result instanceof Error, true);
		}
	});
		
	after(function*() { yield col.remove({}); });
});