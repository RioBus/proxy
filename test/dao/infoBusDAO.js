'use strict';
/* global describe, it, before, global, __dirname, after; */
const base = `${__dirname}/../../src`;

const Assert = require('assert');
const Database = require(`${base}/core`).Database;
const InfoBus = require(`${base}/infoBus/infoBusModel`);
const InfoBusDAO = require(`${base}/infoBus/infoBusDAO`);

var dao, saved, col;

describe('InfoBusDAO', () => {
	
	before(function*() {
		let conn = yield Database.connect();
		col = conn.collection('info-bus');
		dao = new InfoBusDAO(conn);
		saved = yield col.insert(new InfoBus('sign', 10, 'fuel', 20, 'model', 'body', 'frame', 'frameNumber', 'order', 'features', new Date()));
	});
	
	it('should find information about bus with order equal to \'order\'', function*() {
		let data = yield dao.getByOrder([saved.order]);
		Assert(data instanceof Array);
		Assert.equal(data.length, 1);
	});
	
	after(function*() {
		yield col.remove({});
	});
});