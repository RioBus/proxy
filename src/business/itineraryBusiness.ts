import IBusiness   = require("../business/iBusiness");
import IDataAccess = require("../dataAccess/iDataAccess");
import Itinerary   = require("../domain/entity/itinerary");
import $inject 	   = require("../core/inject");

class ItineraryBusiness implements IBusiness {
	
	public constructor(private context: IDataAccess = $inject("dataAccess/itineraryDataAccess")) {}
	
	public retrieve(line: string): Itinerary {
		return this.context.retrieve(line);
	}
	
	public delete(): any {}
	
	public create(): any {}
	
	public update(): any {}
}
export = ItineraryBusiness;