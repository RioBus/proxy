declare var require, describe, it, global;
import DbContext       = require("../../src/core/database/dbContext");
import ICollection     = require("../../src/core/database/iCollection");
import ItineraryModelMap = require("../../src/domain/modelMap/itineraryModelMap");
import ItineraryService  = require("../../src/service/itineraryService");
import IService        = require("../../src/service/iService");
import Itinerary         = require("../../src/domain/entity/itinerary");
import IBusiness       = require("../../src/business/iBusiness");


var Assert = require("assert");

class MockedBusiness implements IBusiness{
	public create  (data: any): string { return data; }
	public retrieve(data: any): string { return data; }
	public update  (data: any): string { return data; }
	public delete  (data: any): string { return data; }	
}

describe("ItineraryService", () => {
	
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
	
	
	var collection: ICollection<Itinerary>;
	try{
		collection = <ICollection<Itinerary>> context.collection("itinerary", new ItineraryModelMap());
	}
	catch(e){}
	
	var itineraryService : IService = new ItineraryService(new MockedBusiness());
	var itinerary : Itinerary = new Itinerary("line", "description", "agency", []);
	
	collection.save(itinerary);
	
		
	it("should return a Itinerary object given a line", (done) => {
		var current: boolean =  itineraryService.retrieve(itinerary) instanceof Itinerary;
		var expected: boolean = true;
		Assert.equal(current, expected);
		done();
	});
});