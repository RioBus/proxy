'use strict';
/* global describe, it, before; */

const Assert = require('assert');

const base = '../../src';
const Reclaim = require(`${base}/reclaim/reclaimModel`);

describe('Reclaim', () => {
	
	let reclaim
	
	before( () => {
		reclaim = new Reclaim('title','line', '0/00/0000', 'text');
	});
	
	it('should have a property \'title\' containing a string', () => {
		Assert.equal(typeof reclaim.title, 'string');
	});
	
	it('should have a property \'line\' containing a string', () => {
		Assert.equal(typeof reclaim.line, 'string');
	});
	
	it('should have a property \'date\' containing a string', () => {
		Assert.equal(typeof reclaim.date, 'string');
	});
	
	it('should have a property \'text\' containing a string', () => {
		Assert.equal(typeof reclaim.text, 'string');
	});
});