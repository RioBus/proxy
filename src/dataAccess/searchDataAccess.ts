import Bus 		   = require("../domain/itinerarySpot");
import IDataAccess = require("../dataAccess/iDataAccess");
import List 	   = require("../common/tools/list");
import $inject 	   = require("../core/inject");

class SearchDataAccess implements IDataAccess {
	
	public retrieve(line: string): List<Bus> {
		return null;
	}
	
	public retrieveList(): List<Bus> {
		return null;
	}
	
	public remove(): any {}
	
	public save(): any {}
	
	public update(): any {}
}
export = SearchDataAccess;