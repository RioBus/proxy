import IDataAccess = require("../dataAccess/iDataAccess");
import $inject 	   = require("../core/inject");

class LogDataAccess implements IDataAccess {
	
	public retrieve(line: string): any {}
	
	public retrieveList(): any {}
	
	public remove(): any {}
	
	public save(): any {}
	
	public update(): any {}
}
export = LogDataAccess;