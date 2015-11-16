'use strict';
/* global describe, it, before, global, __dirname, after; */
require('co-mocha')(require('mocha'));
const base = `${__dirname}/../../src`;

const Assert = require('assert');
const Database = require(`${base}/core`).Database;
const Bus = require(`${base}/model/bus`);

var dao, saved, col;

describe('Bus', () => {
	
	before(function*() {
		saved = new Bus('', 'order', '', '', 23, 45, (new Date()).toDateString(), '');
	});
	
	it('should put \'indefinido\' without a explicit line', function*(done) {	
		Assert.equal(saved.line, 'indefinido');	
		done();
	});
	
	it('should put zero without speed', function*(done){
		Assert.equal(saved.speed, 0);
		done();
	});
	
	it('should put zero without direction', function*(done){
		Assert.equal(saved.direction, 0);
		done();
	});
	
	it('should put \'desconhecido\' without sense', function*(done){
		Assert.equal(saved.sense, 'desconhecido');
		done();
	});

		
	after(function*() {
	});
});