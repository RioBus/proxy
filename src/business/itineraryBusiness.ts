import IBusiness   = require("../business/iBusiness");
import IDataAccess = require("../dataAccess/iDataAccess");
import Itinerary   = require("../domain/entity/itinerary");
import $inject 	   = require("../core/inject");

class ItineraryBusiness implements IBusiness {
	
	public constructor(private context: IDataAccess = $inject("dataAccess/itineraryDataAccess")) {}
	
	public retrieve(line: string): Itinerary {
		return this.context.retrieve(line);
	}
	
	/**
	 * Not implemented.
	 */
	public delete(): any {}
	
	/**
	 * Not implemented.
	 */
	public create(): any {}
	
	/**
	 * Not implemented.
	 */
	public update(): any {}
}
export = ItineraryBusiness;