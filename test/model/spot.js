'use strict';
/* global describe, it, before; */

const Assert = require('assert');

const base = '../../src';
const Spot = require(`${base}/model/spot`);

describe('Spot', () => {
	
	let spot;
	
	before( () => {
		spot = new Spot(0, 1);
	});
	
	it('should have a property \'latitude\' containing a number', () => {
		Assert.equal(typeof spot.latitude, 'number');
	});
	
	it('should have a property \'longitude\' containing a number', () => {
		Assert.equal(typeof spot.longitude, 'number');
	});
});