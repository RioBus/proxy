declare var require, describe, it, global;
import BusStopService  = require("../../src/service/busStopService");
import IService        = require("../../src/service/iService");
import BusStop         = require("../../src/domain/entity/busStop");
import IBusiness       = require("../../src/business/iBusiness");


var Assert = require("assert");

class MockedBusiness implements IBusiness{
	public create  (data: any): string { return data; }
	public retrieve(data: any): string { return data; }
	public update  (data: any): string { return data; }
	public delete  (data: any): string { return data; }	
}

describe("BusStopservice", () => {
	
	var busService : IService = new BusStopService(new MockedBusiness());
	var bus : BusStop = new BusStop("line", "description", "agency", []);
		
	it("should return a BusStop object given a line", (done) => {
		var current: boolean =  busService.retrieve(bus) instanceof BusStop;
		var expected: boolean = true;
		Assert.equal(current, expected);
		done();
	});
});
