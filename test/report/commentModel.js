'use strict';
/* global describe, it, before; */

const Assert = require('assert');

const base = '../../src';
const Comment = require(`${base}/report/commentModel`);

describe('Comment', () => {
	
	let comment;
	
	before( () => {
		comment = new Comment('userId', 'User Name', 'This is the message I left');
	});
	
	it('should have a property \'userId\' containing a string', () => {
		Assert.equal(typeof comment.userId, 'string');
		Assert.equal(comment.userId, 'userId');
	});
	
	it('should have a property \'userName\' containing a string', () => {
		Assert.equal(typeof comment.userName, 'string');
		Assert.equal(comment.userName, 'User Name');
	});
	
	it('should have a property \'message\' containing a string', () => {
		Assert.equal(typeof comment.message, 'string');
		Assert.equal(comment.message, 'This is the message I left');
	});
	
	it('should have a property \'timestamp\' containing a string', () => {
		Assert.equal(typeof comment.timestamp, 'string');
        Assert.equal(new Date(comment.timestamp) instanceof Date, true);
	});
});