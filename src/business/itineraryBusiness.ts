import IBusiness       = require("../business/iBusiness");
import IDataAccess     = require("../dataAccess/iDataAccess");
import Itinerary       = require("../domain/entity/itinerary");
import ItinerarySpot   = require("../domain/entity/itinerarySpot");
import LegacyItinerary = require("../domain/entity/legacyItinerary");
import $inject 	   	   = require("../core/inject");

/**
 * Itinerary business logics
 * @class ItineraryBusiness
 */
class ItineraryBusiness implements IBusiness {
	
	public constructor(private context: IDataAccess = $inject("dataAccess/itineraryDataAccess")) {}
	
	/**
	 * Retrieves the Itinerary for a given line
	 * @param {string} line
	 * @return {Itinerary}
	 */
	public retrieve(line: string, isLegacy?: boolean): Itinerary | LegacyItinerary[] {
		var response: Itinerary = this.context.retrieve(line);
		if(response===null) response = new Itinerary(line, "desconhecido", "desconhecido", "desconhecido", []);
		return (isLegacy!==undefined && isLegacy)? this.convertToLegacy(response) : response;
	}
	
	private convertToLegacy(itinerary: Itinerary) : LegacyItinerary[] {
		var list: LegacyItinerary[] = new Array<LegacyItinerary>();
		var sequential: number = 0;
		itinerary.getSpots().forEach( (spot: ItinerarySpot)=>{
			if(spot.isReturning()) sequential = 0;
			var legacy: LegacyItinerary = new LegacyItinerary(sequential++, itinerary.getLine(), itinerary.getDescription(), itinerary.getAgency(), 0, spot.getLatitude(), spot.getLongitude());
			list.push(legacy);
		});
		return list;
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