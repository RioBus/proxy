declare var require, describe, it, global;
import BusStopService = require("../../src/service/busStopService");
import IService = require("../../src/service/iService");
import BusStop = require("../../src/domain/entity/busStop");
import IBusiness = require("../../src/business/iBusiness");
var Assert = require("assert");

class MockedBusiness implements IBusiness{
	public constructor(){}
	public create() : any{}
	public retrieve() : any{}
	public update() : any{}
	public delete() : any{}	
}

describe("BusStopservice", () => {
	var bus : BusStopService = new BusStopService(new MockedBusiness());
	var busTest : BusStop = new BusStop("linha", "description", "agency", []);
	
	it("should return a BusStop object given a line", (done) => {
		var current: boolean = bus.retrieve(busTest.getLine()) instanceof BusStop;
		var expect: boolean = true;
		Assert.equal(current, expect);
		done();
	});
});
