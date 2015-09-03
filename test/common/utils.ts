declare var require, describe, it;
import Utils = require("../../src/common/tools/utils");
var Assert = require("assert");

describe("Utils", () => {
	
	it("should return a string without the replaced value", (done) => {
		var current: string = "hello world";
		var expected: string = "foo world";
		current = Utils.replacePattern(/hello/, "foo", current);
		Assert.equal(current, expected);
		done();
	});
});