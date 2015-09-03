declare var require, describe, it;
import File = require("../../src/core/file");
var Assert = require("assert");

describe("File", () => {
	
	var fileName: string = (new Date()).toISOString();
	var filePath: string = "/tmp/"+fileName+".txt";
	var file = new File(filePath);
	
	it("should return the file path string", (done) => {
		var current: string = file.getFilePath();
		var expected: string = filePath; 
		Assert.equal(current, expected);
		done();
	});
	
	it("should return the file directory path string", (done) => {
		var current: string = file.getDirPath();
		var expected: string = "/tmp"; 
		Assert.equal(current, expected);
		done();
	});
	
	it("should return the file name string", (done) => {
		var current: string = file.getFileName();
		var expected: string = fileName+".txt"; 
		Assert.equal(current, expected);
		done();
	});
	
	it("should fail because the file does not exist", (done) => {
		var current: Error;
		var expected: string = "ENOENT";
		try {
			file.read();
		} catch(e) {
			current = e.code;
		} finally {
			Assert.equal(current, expected);
			done();
		}
	});
	
	it("should append 'another line' to the file", (done) => {
		var expected: string = "another line";
		var current: string;
		try {
			file.append(expected);
			current = file.read();
		} catch(e) {
			current = e;
		} finally {
			Assert.equal(current, expected+'\n');
			done();
		}
	});
	
	it("should return a string", (done) => {
		var current = typeof file.read();
		var expected: string = "string";
		Assert.equal(current, expected);
		done();
	});
	
	it("should write 'test' to the file", (done) => {
		var expected: string = "test";
		file.write(expected);
		var current = file.read();
		Assert.equal(current, expected);
		done();
	});
});