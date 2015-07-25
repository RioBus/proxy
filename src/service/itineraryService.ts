import IBusiness = require("../business/iBusiness");
import IService  = require("./iService");
import $inject 	 = require("../core/inject");

/**
 * Responsible for integrating the outside's requests for Itineraries with the business logics
 * @class ItineraryService
 */
class ItineraryService implements IService {
	
	public constructor(private context: IBusiness = $inject("business/itineraryBusiness")) {}
	
	/**
	 * Gets the Itinerary given a line
	 * @param {string} line
	 * @return {Itinerary}
	 */
	public retrieve(line: string): any {
		return this.context.retrieve(line);
	}
	
	/**
	 * Not implemented.
	 * @return {void}
	 */
	public delete(): any {}
	
	/**
	 * Not implemented.
	 * @return {void}
	 */
	public create(): any {}
	
	/**
	 * Not implemented.
	 * @return {void}
	 */
	public update(): any {}
}
export = ItineraryService;