declare var require, describe, it, global;
import DbContext       = require("../../src/core/database/dbContext");
import ICollection     = require("../../src/core/database/iCollection");
import BusStopModelMap = require("../../src/domain/modelMap/busStopModelMap");
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
	
	var config: any = {
		driver: "mongodb",
		config: {
			dbName: "riobus",
			host: "ds047742.mongolab.com",
			user: "riobus",
			pass: "riobus",
			port: "47742"
		}
	};
	
	var context: DbContext;
	try{
		context = new DbContext(config);
	}catch(e){}
	
	
	var collection: ICollection<BusStop>;
	try{
		collection = <ICollection<BusStop>> context.collection("busStop", new BusStopModelMap());
	}
	catch(e){}
	
	var busService : IService = new BusStopService(new MockedBusiness());
	var bus : BusStop = new BusStop("line", "description", "agency", []);
	collection.save(bus);
		
	it("should return a BusStop object given a line", (done) => {
		var current: boolean =  busService.retrieve(bus) instanceof BusStop;
		var expected: boolean = true;
		Assert.equal(current, expected);
		done();
	});
});
