'use strict';
/* global describe, it, before, global, __dirname, after; */
const base = `${__dirname}/../../src`;

const Assert     = require('assert');
const Database   = require(`${base}/core`).Database;
const Reclaim    = require(`${base}/reclaim/reclaimModel`);
const ReclaimDAO = require(`${base}/reclaim/reclaimDAO`);

let dao, saved, col;

describe('ReclaimDAO', () => {
	
	before(function*() {
		let conn = yield Database.connect();
		col = conn.collection('reclaim');
		dao = new ReclaimDAO(conn);
	});
	
	it('should put the reclaims on database', function*() {
		let result;
		try{
			result = yield dao.save(new Reclaim('title','line','date','text'));
		}
		catch(error){
			result = error
		}
		finally{
			Assert.equal(result.title, 'title');
			Assert.equal(result.line, 'line');
			Assert.equal(result.date, 'date');
			Assert.equal(result.text, 'text');
		}
		
	});
		
	after(function*() {
		yield col.remove({});
	});
});