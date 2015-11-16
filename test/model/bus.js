'use strict';
/* global describe, it, before, global, __dirname, after; */
const base = `${__dirname}/../../src`;
const Moment = require('moment-timezone');

const Assert = require('assert');
const Database = require(`${base}/core`).Database;
const Bus = require(`${base}/model/bus`);

var timestamp, bus, col;

describe('Bus', () => {
	
	before(function() {
		timestamp = (new Date()).toDateString();
		bus = new Bus('', 'order', '', '', 23, 45, timestamp, '');
	});
	
	it('should set line to \'indefinido\' when not given', function(done) {	
		Assert.equal(bus.line, 'indefinido');	
		done();
	});
	
	it('should set speed to 0 when not given', function(done) {
		Assert.equal(bus.speed, 0);
		done();
	});
	
	it('should set direction to 0 when not given', function(done) {
		Assert.equal(bus.direction, 0);
		done();
	});
	
	it('should set sense to \'desconhecido\' when not given', function(done) {
		Assert.equal(bus.sense, 'desconhecido');
		done();
	});
	
	it('should set the time with correct format', function*(done){
		timestamp = (new Date(timestamp)).toISOString();
		timestamp = Moment.tz(timestamp, "America/Sao_Paulo").format();
		Assert.equal(bus.timestamp, timestamp);
		done();
	});
	
});