'use strict';
/* global describe, it, before; */

const Assert = require('assert');

const base = '../../src';
const Report = require(`${base}/report/reportModel`);

describe('Report', () => {
	
	let report;
	
	before( () => {
		report = new Report('title','line', new Date(), 'text');
	});
	
	it('should have a property \'title\' containing a string', () => {
		Assert.equal(typeof report.title, 'string');
		Assert.equal(report.title, 'title');
	});
	
	it('should have a property \'line\' containing a string', () => {
		Assert.equal(typeof report.line, 'string');
		Assert.equal(report.line, 'line');
	});
	
	it('should have a property \'date\' containing a string', () => {
		Assert.equal(report.date instanceof Date, true);
	});
	
	it('should have a property \'text\' containing a string', () => {
		Assert.equal(typeof report.text, 'string');
		Assert.equal(report.text, 'text');
	});
});