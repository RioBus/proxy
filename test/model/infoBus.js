'use strict';
/* global describe, it, before; */

const Assert = require('assert');

const base = '../../src';
const InfoBus = require(`${base}/infoBus/infoBusModel`);

describe('InfoBus', () => {
	
	let infoBus, date;
	
	before( () => {
		date = new Date()
		infoBus = new InfoBus('sign', 10, 'fuel', 20, 'model', 'body', 'frame', 'frameNumber', 'order', 'features', date);
	});
	
	it('should have a property \'string\' containing a string', () => {
		Assert.equal(typeof infoBus.sign, 'string');
	});
	
	it('should have a property \'fabrication\' containing a number', () => {
		Assert.equal(typeof infoBus.fabrication, 'number');
	});
	
	it('should have a property \'fuel\' containing a string', () => {
		Assert.equal(typeof infoBus.fuel, 'string');
	});
	
	it('should have a property \'plant\' containing a number', () => {
		Assert.equal(typeof infoBus.plant, 'number');
	});
	
	it('should have a property \'model\' containing a string', () => {
		Assert.equal(typeof infoBus.model, 'string');
	});
	
	it('should have a property \'body\' containing a string', () => {
		Assert.equal(typeof infoBus.body, 'string');
	});
	
	it('should have a property \'frame\' containing a string', () => {
		Assert.equal(typeof infoBus.frame, 'string');
	});
	
	it('should have a property \'frameNumber\' containing a string', () => {
		Assert.equal(typeof infoBus.frameNumber, 'string');
	});
	
	it('should have a property \'order\' containing a string', () => {
		Assert.equal(typeof infoBus.order, 'string');
	});
	
	it('should have a property \'features\' containing a string', () => {
		Assert.equal(typeof infoBus.features, 'string');
	});
	
	it('should have a property \'date\' containing a string', () => {
		Assert.equal(typeof infoBus.inclusionDate, 'string');
	});
});
