import File		   = require("../core/file");
import IDataAccess = require("../dataAccess/iDataAccess");
import $inject 	   = require("../core/inject");

class LogDataAccess implements IDataAccess {
	
	public retrieve(logPath: string, lines: number): string[] {
		var file: File = new File(logPath);
		return file.read().split("\n").reverse().slice(0, lines);
	}
	
	public delete(): any {}
	
	public create(): any {}
	
	public update(): any {}
}
export = LogDataAccess;