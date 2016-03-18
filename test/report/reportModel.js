'use strict';
/* global describe, it, before; */

const Assert = require('assert');

const base = '../../src';
const Report = require(`${base}/report/reportModel`);
const Comment = require(`${base}/report/commentModel`);

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
	
	it('should have a method \'addComent\' which adds a \'Comment\' instance to the comments list', () => {
        report.addComment(new Comment('userid', 'user name', 'text'));
		Assert.equal(report.comments.length, 1);
		Assert.equal(report.comments[0] instanceof Comment, true);
	});
	
	it('should have a method \'removeComment\' which removes a \'Comment\' from to the comments list', () => {
        let com = report.comments[0];
        report.removeComment(com);
		Assert.equal(report.comments.length, 0);
	});
});