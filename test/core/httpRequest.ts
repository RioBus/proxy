declare var require, describe, it;
import HttpRequest = require("../../src/core/httpRequest");
var Assert = require("assert");

describe("HttpRequest", () => {
	
	var http = new HttpRequest();

    var options: any = {
        url: "http://dadosabertos.rio.rj.gov.br/apiTransporte/apresentacao/rest/index.cfm/onibus",
        headers: {
            "Accept": "*/*",
            "Cache-Control": "no-cache"
        },
        json: false
    };
	
	it("should return something asynchronously from GET request", (done) => {
		http.get("http://google.com/", (error: Error, response: any)=>{
			if(error) Assert(error instanceof Error);
			if(response) Assert(response.statusCode > 0);
			done();
		});
	});
	
	it("should return something synchronously from GET request", (done) => {
		try{
			var response = http.get("http://google.com/");
			Assert(response.statusCode > 0);
		} catch(e) {
			Assert(e instanceof Error);
		} finally {
			done();
		}
	});
	
	it("should return something synchronously from GET request using options object", (done) => {
		try{
			var response = http.get(options);
			Assert(response.statusCode > 0);
		} catch(e) {
			Assert(e instanceof Error);
		} finally {
			done();
		}
	});
});