declare var require, describe, it, global;
import SearchService     = require("../../src/service/searchService");
import IService          = require("../../src/service/iService");
import Bus               = require("../../src/domain/entity/bus");
import IBusiness         = require("../../src/business/iBusiness");
var Assert               = require("assert");
var moment               = require('moment-timezone');



class MockedBusiness implements IBusiness{
	public create  (data: any): string { return data; }
	public retrieve(data: any): string { return data; }
	public update  (data: any): string { return data; }
	public delete  (data: any): string { return data; }	
	
	public static analytics: any = {
        ua: 'teste',
        host: 'local',
		enable: true
    };
	
	
}

describe("SearchService", () =>{
	
	global.analytics = MockedBusiness.analytics.enable;
	
	var searchService : IService = new SearchService(new MockedBusiness(), true);
	
	var timeStamp : any = moment.tz("America/Sao_Paulo").format()
	var bus : Bus = new Bus("line", "order", 0, 0, 0, 0, timeStamp);
	
	
	it("should return a list not empty", (done) =>{
		var current : number = searchService.retrieve(bus).length;
		var notExpected : number = 0;
		Assert.notEqual(current, notExpected);
		done();
	});
	
	it("should return a list of Bus objects", (done) => {
		var current : boolean=  searchService.retrieve(bus) instanceof Bus;
		var expected : boolean = true;
		Assert.equal(current, expected);
		done();
	});
});