'use strict';
/* global describe, it, before; */

const Assert = require('assert');

const base = '../../src';
const Register = require(`${base}/register/registerModel`);

describe('Register', () => {
	
	let register;
	
	before( () => {
		register = new Register('name', 'email', 'password');
	});
	
	it('should have a property \'name\' containing a string', () => {
		Assert.equal(typeof register.name, 'string');
	});
	
	it('should have a property \'email\' containing a string', () => {
		Assert.equal(typeof register.email, 'string');
	});
	
	it('should have a property \'password\' containing a string', () => {
		Assert.equal(typeof register.password, 'string');
		Assert.notEqual(register.password,'password');
	});
	
	it('should have a property \'profile_image\' containing a string', () => {
		Assert.equal(typeof register.profile_image, 'string');
	});
	
	it('should have a property \'social\' containing an Object', () => {
		Assert.equal(register.social instanceof Object, true);		
	});

	it('should have a property \'social.facebook_id\' containing a string', () => {
		Assert.equal(typeof register.social.facebook_id, 'string');		
	});

	it('should have a property \'social.google_id\' containing a string', () => {
		Assert.equal(typeof register.social.google_id, 'string');		
	});

	it('should have a property \'social.twitter_id\' containing a string', () => {
		Assert.equal(typeof register.social.twitter_id, 'string');		
	});
});