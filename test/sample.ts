/// <reference path="../defs/tsd.d.ts" />
var Assert = require("assert");

describe("Sample test case", () => {
	it("should pass", (done) => {
		Assert.equal(true, true);
		done();
	});
});