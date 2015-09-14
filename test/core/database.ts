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
	
	var collection: ICollection<Itinerary>;
	try{
		collection = <ICollection<Itinerary>> context.collection("itinerary", new ItineraryModelMap());
	}
	catch(e){}
	
	it("should find the collection itinerary", (done) => {
		var current : ICollection<Itinerary> = collection;
		var notExpected : ICollection<Itinerary> = undefined;
		Assert.notEqual(current, notExpected);
		done();
	});
	
	var description: string = (new Date()).toString();
	
	var itinerary: Itinerary = new Itinerary("linha", description, "agencia", []);
	
	it("should save the itinerary object to the database", (done) => {
		var current: Itinerary = collection.save(itinerary);
		var notExpected: Itinerary = null;
		Assert.notEqual(current, notExpected);
		done();
	});
	
	it("should find or create the Itinerary object in the database", (done) => {
		var current: Itinerary = collection.findOrCreate(itinerary);
		var notExpected : Itinerary = null;
		Assert.notEqual(current, notExpected);
		done();
	});
	
	var list: Itinerary[] = collection.find({});
	
	it("should return a list not empty", (done) =>{
		var current: number = list.length;
		var notExpected: number = 0;
		Assert.notEqual(current, notExpected);
		done();
	});
	
	it("should find Itinerary instances from the collection", (done) => {
		var current: boolean = list[0] instanceof Itinerary;
		var expected: boolean = true;
		Assert.equal(current, expected);
		done();
	});
	
	it("should return the number of documents from the collection", (done) => {
		var current: number = collection.count({});
		var notExpected: number = 0;
		Assert.notEqual(current, notExpected);
		done();
	});
	
	it("should return one document", (done) => {
		var current: Itinerary = collection.findOne(itinerary);
		var notExpected: Itinerary = null;
		Assert.notEqual(current, notExpected);
		done();
	});
	
	it("should update one document", (done) => {
		var current: Itinerary = collection.update({line: itinerary.getLine()}, {$set:{agency:"agency two"}});
		var notExpected: Itinerary = undefined;
		Assert.notEqual(current, notExpected);
		done();
	});
	
	it("should find a document and modify it", (done) =>{
		var current: Itinerary = collection.findAndModify(itinerary.getLine, [["line", ("ascending")], ["agency", ("ascending")]], {$set: {agency: "new agency"}});
		var notExpected: Itinerary = null;
		Assert.notEqual(current, notExpected);
		done();
	});
	
	try {
		collection.aggregate([{$sort: {line : -1}}]);
	}
	catch(e){};
	
	it("should delete a document in the collection", done =>{
		var current: boolean = collection.remove({ description: description });
		var expected: boolean = true;
		Assert.equal(current, expected);
		done();
	});
	
});