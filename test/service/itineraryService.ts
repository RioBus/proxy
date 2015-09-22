declare var require, describe, it, global;
import ItineraryService  = require("../../src/service/itineraryService");
import IService          = require("../../src/service/iService");
import Itinerary         = require("../../src/domain/entity/itinerary");
import IBusiness         = require("../../src/business/iBusiness");


var Assert = require("assert");

class MockedBusiness implements IBusiness{
	public create  (data: any): string { return data; }
	public retrieve(data: any): string { return data; }
	public update  (data: any): string { return data; }
	public delete  (data: any): string { return data; }	
}

describe("ItineraryService", () => {	
	var itineraryService : IService = new ItineraryService(new MockedBusiness());
	var itinerary : Itinerary = new Itinerary("line", "description", "agency", "keyword", []);
	
		
	it("should return a Itinerary object given a line", (done) => {
		var current: boolean =  itineraryService.retrieve(itinerary) instanceof Itinerary;
		var expected: boolean = true;
		Assert.equal(current, expected);
		done();
	});
});