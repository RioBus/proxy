declare var require, describe, it, global;
import DbContext = require("../../src/core/database/dbContext");
import ICollection = require("../../src/core/database/iCollection");
import Itinerary = require("../../src/domain/entity/itinerary");
import ItineraryModelMap = require("../../src/domain/modelMap/itineraryModelMap");

var Assert = require("assert");

describe("Database", () => {
	
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
	
	it("should connect to the database", (done) => {
		var current : DbContext = context;
		var notExpected : DbContext = undefined; 
		Assert.notEqual(current, notExpected);
		done();
	});
	
	var collection: ICollection<Itinerary> = <ICollection<Itinerary>> context.collection("itinerary", new ItineraryModelMap());
	
	it("should find the collection itinerary", (done) => {
		Assert(collection !== undefined);
		done();
	});
	
	var itinerary: Itinerary = new Itinerary("linha", "descricao", "agencia", []);
	
	it("should save the itinerary object to the database", (done) => {
		var result = collection.save(itinerary);
		Assert(result instanceof Itinerary);
		done();
	});
	
	it("should find or create the Itinerary object in the database", (done) => {
		var result = collection.findOrCreate(itinerary);
		Assert(result instanceof Itinerary);
		done();
	});
	
	var list: Itinerary[] = collection.find({});
	
	it("should return a list of objects from the database", (done) => {
		Assert(list.length > 0);
		var first: Itinerary = list[0];
		Assert(first instanceof Itinerary);
		done();
	});
	
});