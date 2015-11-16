'use strict';
/* global describe, it, before, global, __dirname, after; */
require('co-mocha')(require('mocha'));
const base = `${__dirname}/../../src`;

const Assert = require('assert');
const Database = require(`${base}/core`).Database;
const Bus = require(`${base}/model/bus`);

var dao, bus, col;

describe('Bus', () => {
	
	before(function*() {
		bus = new Bus('', 'order', '', '', 23, 45, (new Date()).toDateString(), '');
	});
	
	it('should set line to \'indefinido\' when not given', function*(done) {	
		Assert.equal(bus.line, 'indefinido');	
		done();
	});
	
	it('should set speed to 0 when not given', function*(done) {
		Assert.equal(bus.speed, 0);
		done();
	});
	
	it('should set direction to 0 when not given', function*(done) {
		Assert.equal(bus.direction, 0);
		done();
	});
	
	it('should set sense to \'desconhecido\' when not given', function*(done) {
		Assert.equal(bus.sense, 'desconhecido');
		done();
	});

		
	after(function*() {
	});
});