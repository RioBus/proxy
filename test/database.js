'use strict';
/* global describe, it, before; */
require('co-mocha')(require('mocha'));

const Assert = require('assert');
const Database = require('../src/core').Database;

var db, collection;

describe('Database', () => {
	
	it('should connect to database', function*(done) {
		db = yield Database.connect();
		Assert.notEqual(db, null);
		done();
	});
	
	it('should access the collection test', function*(done) {
		collection = db.collection('test');
		Assert.notEqual(collection, null);
		done();
	});
	
	it('should insert data in the collection', function*(done) {
		yield collection.insert({ name: 'Fulano' });
		
		var item = yield collection.findOne({ name: 'Fulano' });
		Assert.equal(item.name, 'Fulano');
		done();
	});
	
	it('should update Fulano in the collection', function*(done) {
		var item = yield collection.findOne({ name: 'Fulano' });
		item.name = 'Ciclano';
		yield item.save();
		Assert.equal(item.name, 'Ciclano');
		done();
	});
	
	it('should retrieve all documents in test collection', function*(done) {
		var items = yield collection.find({});
		Assert.notEqual(items.length, 0);
		done();
	});
	
	it('should remove all documents in test collection', function*(done) {
		yield collection.remove({});
		var items = yield collection.find({});
		Assert.equal(items.length, 0);
		done();
	});
});