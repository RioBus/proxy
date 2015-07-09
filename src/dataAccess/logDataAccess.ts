import IDataAccess = require("../dataAccess/iDataAccess");
import $inject 	   = require("../core/inject");

class LogDataAccess implements IDataAccess {
	
	public retrieve(line: string): any {}
	
	public delete(): any {}
	
	public create(): any {}
	
	public update(): any {}
}
export = LogDataAccess;