import IDataAccess   = require("../dataAccess/iDataAccess");
import ItinerarySpot = require("../domain/itinerarySpot");
import List 		 = require("../common/tools/list");
import $inject 		 = require("../core/inject");

class ItineraryDataAccess implements IDataAccess {
	
	public retrieve(line: string): List<ItinerarySpot> {
		return null;
	}
	
	public retrieveList(): any {}
	
	public remove(): any {}
	
	public save(): any {}
	
	public update(): any {}
}
export = ItineraryDataAccess;