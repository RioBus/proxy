'use strict';
/* global describe, it, before; */

const Assert = require('assert');

const base = '../../src';
const Reclaim = require(`${base}/reclaim/reclaimModel`);

describe('Reclaim', () => {
	
	let reclaim;
	
	before( () => {
		reclaim = new Reclaim('title','line', new Date(), 'text');
	});
	
	it('should have a property \'title\' containing a string', () => {
		Assert.equal(typeof reclaim.title, 'string');
		Assert.equal(reclaim.title, 'title');
	});
	
	it('should have a property \'line\' containing a string', () => {
		Assert.equal(typeof reclaim.line, 'string');
		Assert.equal(reclaim.line, 'line');
	});
	
	it('should have a property \'date\' containing a string', () => {
		Assert.equal(reclaim.date instanceof Date, true);
	});
	
	it('should have a property \'text\' containing a string', () => {
		Assert.equal(typeof reclaim.text, 'string');
		Assert.equal(reclaim.text, 'text');
	});
});