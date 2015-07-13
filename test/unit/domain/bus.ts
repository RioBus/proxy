/// <reference path="../../../defs/tsd.d.ts" />
import Bus = require("../../../src/domain/entity/bus");
var Assert = require("assert");

describe("[UNIT] Bus", () => {
	
	var line: string = "line";
	var order: string = "order";
	var speed: number = 100;
	var direction: number = 259;
	var latitude: number = 10;
	var longitude: number = 20;
	var timestamp: string = (new Date()).toISOString();
	var sense: string = "sense";
	var id: number = 693182736981237;
	
	var bus: Bus = new Bus(line, order, speed, direction, latitude, longitude, timestamp, sense, id);
	
	it("should get line value", (done) => {
		Assert.equal(bus.getLine(), line);
		done();
	});
	
	it("should change the line value", (done) => {
		var newLine: string = "another line value";
		bus.setLine(newLine);
		Assert.equal(bus.getLine(), newLine);
		done();
	});
	
	it("should get order value", (done) => {
		Assert.equal(bus.getOrder(), order);
		done();
	});
	
	it("should get speed value", (done) => {
		Assert.equal(bus.getSpeed(), speed);
		done();
	});
	
	it("should get direction value", (done) => {
		Assert.equal(bus.getDirection(), direction);
		done();
	});
	
	it("should get latitude value", (done) => {
		Assert.equal(bus.getLatitude(), latitude);
		done();
	});
	
	it("should get longitude value", (done) => {
		Assert.equal(bus.getLongitude(), longitude);
		done();
	});
	
	it("should get timestamp value", (done) => {
		Assert.equal(bus.getUpdateTime().toISOString(), timestamp);
		done();
	});
	
	it("should get sense value", (done) => {
		Assert.equal(bus.getSense(), sense);
		done();
	});
	
	it("should change the sense value", (done) => {
		var newSense: string = "another sense value";
		bus.setSense(newSense);
		Assert.equal(bus.getSense(), newSense);
		done();
	});
	
	it("should get id value", (done) => {
		Assert.equal(bus.getId(), id);
		done();
	});
});