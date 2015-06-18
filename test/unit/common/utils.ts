/// <reference path="../../../defs/tsd.d.ts" />
import Utils  = require("../../../src/common/tools/utils");
var    Assert = require("assert");

describe("[UNIT] Utils class", () => {
	
	it("should replace $$ for 'bar'", (done) => {
		var text = "foo $$";
		var piece = "bar";
		var output = Utils.replacePattern(/\$\$/, piece, text);
		Assert.equal(output, "foo bar");
		done();
	});
});