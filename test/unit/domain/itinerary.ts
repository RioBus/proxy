/// <reference path="../../../defs/tsd.d.ts" />
import Itinerary 	 = require("../../../src/domain/entity/itinerary");
import ItinerarySpot = require("../../../src/domain/entity/itinerarySpot");
var Assert 			 = require("assert");

describe("[UNIT] Itinerary", () => {
	
	var line: string = "line";
	var description: string = "description";
	var agency: string = "agency";
	var id: number = 693182736981237;
	
	var spots: ItinerarySpot[] = [];
	spots[0] = new ItinerarySpot(10, 20, false);
	spots[1] = new ItinerarySpot(11, 21, false);
	spots[2] = new ItinerarySpot(7, 13, true);
	
	var itinerary: Itinerary = new Itinerary(line, description, agency, spots, id);
	
	it("should get line value", (done) => {
		Assert.equal(itinerary.getLine(), line);
		done();
	});
	
	it("should get description value", (done) => {
		Assert.equal(itinerary.getDescription(), description);
		done();
	});
	
	it("should get agency value", (done) => {
		Assert.equal(itinerary.getAgency(), agency);
		done();
	});
	
	it("should get id value", (done) => {
		Assert.equal(itinerary.getId(), id);
		done();
	});
	
	it("should get spots length", (done) => {
		Assert.equal(itinerary.getSpots().length, 3);
		done();
	});
	
	it("should get a spot", (done) => {
		var spot: ItinerarySpot = itinerary.getSpots().pop();
		Assert(spot instanceof ItinerarySpot);
		Assert.equal(spot.getLatitude(), 7);
		Assert.equal(spot.getLongitude(), 13);
		Assert.equal(spot.isReturning(), true);
		done();
	});
});