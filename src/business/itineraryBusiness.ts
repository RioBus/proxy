import ItinerarySpot = require("../domain/itinerarySpot");
import List = require("../common/tools/list");
import $inject = require("../core/inject");
import IBusiness = require("../business/iBusiness");
import IDataAccess = require("../dataAccess/iDataAccess");

class ItineraryBusiness implements IBusiness {
	
	public constructor(private context: IDataAccess = $inject("dataAccess/itineraryDataAccess")) {}
	
	public retrieve(line: string): List<ItinerarySpot> {
		return this.context.retrieve(line);
	}
	
	public retrieveList(): any {}
	
	public remove(): any {}
	
	public save(): any {}
	
	public update(): any {}
}
export = ItineraryBusiness;