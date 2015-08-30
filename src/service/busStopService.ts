import IBusiness = require("../business/iBusiness");
import IService  = require("./iService");
import $inject 	 = require("../core/inject");

/**
 * Responsible for integrating the outside's requests for Itineraries with the business logics
 * @class BusStopService
 */
class BusStopService implements IService {
	
	public constructor(private context: IBusiness = $inject("business/busStopBusiness")) {}
	
	/**
	 * Gets the BusStop given a line
	 * @param {string} line
	 * @return {BusStop}
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
export = BusStopService;