'use strict';
/* global describe, it, before, global, __dirname, after; */
const base = `${__dirname}/../../src`;

const Assert = require('assert');
const Database = require(`${base}/core`).Database;
const Itinerary = require(`${base}/model/itinerary`);

var dao, itinerary, col;

describe('Itinerary', () => {
	
	before(function*() {
		itinerary = new Itinerary('', '', '', '', '');
	});
	
	it('should set line \'indefinido\'when not given', function*(done) {	
		Assert.equal(itinerary.line, 'indefinido');	
		done();
	});
	
	it('should set description \'desconhecido\' when not given', function*(done){
		Assert.equal(itinerary.description, 'desconhecido');
		done();
	});
	
	it('should set agency with empty string when not given', function*(done){
		Assert.equal(itinerary.agency, '');
		done();
	});
	
	it('should set keyword with empty string when not given', function*(done){
		Assert.equal(itinerary.keywords, '');
		done();
	});
	
	it('should set spots with empty array when not given', function*(done){
		Assert.equal(itinerary.spots.length, 0);
		done();
	});
	
});