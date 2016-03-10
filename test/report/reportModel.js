'use strict';
/* global describe, it, before; */

const Assert = require('assert');

const base = '../../src';
const Report = require(`${base}/report/reportModel`);

describe('Report', () => {
	
	let report;
	
	before( () => {
		report = new Report('line', 'order', 'title', 'text content');
	});
	
	it('should have a property \'line\' containing a string', () => {
		Assert.equal(typeof report.line, 'string');
		Assert.equal(report.line, 'line');
	});
	
	it('should have a property \'order\' containing a string', () => {
		Assert.equal(typeof report.order, 'string');
		Assert.equal(report.order, 'order');
	});
	
	it('should have a property \'title\' containing a string', () => {
		Assert.equal(typeof report.title, 'string');
		Assert.equal(report.title, 'title');
	});
	
	it('should have a property \'message\' containing a string', () => {
		Assert.equal(typeof report.message, 'string');
		Assert.equal(report.message, 'text content');
	});
	
	it('should have a property \'timestamp\' containing a string', () => {
		Assert.equal(typeof report.timestamp.toISOString(), 'string');
	});
	
	it('should have a property \'comments\' containing an Array', () => {
		Assert.equal(report.comments instanceof Array, true);
	});
	
	it('should have a method \'isResolved\' which returns a boolean', () => {
		Assert.equal(typeof report.isResolved(), 'boolean');
		Assert.equal(report.isResolved(), false);
	});
});