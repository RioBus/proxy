/// <reference path="../../../defs/tsd.d.ts" />
import List   = require("../../../src/common/tools/list");
var    Assert = require("assert");

describe("[UNIT] List class", () => {
	
	var list: List<number> = new List<number>();
	
	it("should get list size", (done) => {
		var size: number = list.size();
		Assert.equal(size, 0);
		done();
	});
	
	it("should add an element", (done) => {
		var oldSize: number = list.size();
		list.add(Math.random());
		var newSize: number = list.size();
		Assert( newSize > oldSize );
		done();
	});
	
	it("should get an element by position", (done) => {
		var element: number = Math.random();
		list.add(element);
		var position = list.size()-1;
		Assert.equal( list.get(position), element );
		done();
	});
	
	it("should get an iterable list", (done) => {
		Assert( list.getIterable() instanceof Array );
		done();
	});
});