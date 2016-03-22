'use strict';
/* global describe, it, before, global, __dirname, after; */
const base = `${__dirname}/../../src`;

const Assert = require('assert');
const Database = require(`${base}/core`).Database;
const BusInfo = require(`${base}/busInfo/busInfoModel`);
const BusInfoDAO = require(`${base}/busInfo/busInfoDAO`);

var dao, saved, col;

describe('BusInfoDAO', () => {
	
	before(function*() {
		let conn = yield Database.connect();
		col = conn.collection('bus_info');
		dao = new BusInfoDAO(conn);
		saved = yield col.insert(new BusInfo('sign', 10, 'fuel', 20, 'model', 'body', 'frame', 'frameNumber', 'order', 'features', new Date()));
	});
	
	after(function*() { yield col.remove({}); });
	
	it('should find information about a bus with order equal to \'order\'', function*() {
		let data = yield dao.getByOrder(saved.order);
        Assert.notEqual(data, null);
        Assert.equal(data.sign, saved.sign);
        Assert.equal(data.fabrication, saved.fabrication);
        Assert.equal(data.fuel, saved.fuel);
        Assert.equal(data.plant, saved.plant);
        Assert.equal(data.model, saved.model);
        Assert.equal(data.body, saved.body);
        Assert.equal(data.frame, saved.frame);
        Assert.equal(data.frameNumber, saved.frameNumber);
        Assert.equal(data.order, saved.order);
        Assert.equal(data.features, saved.features);					
        Assert.equal(data.inclusionDate, saved.inclusionDate);
        Assert.deepEqual(data._id, saved._id);
	});
});