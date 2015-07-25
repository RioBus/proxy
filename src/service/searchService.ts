import IBusiness = require("../business/iBusiness");
import IService  = require("./iService");
import $inject 	 = require("../core/inject");

/**
 * Responsible for integrating the outside's requests for Buses with the business logics
 * @class SearchService
 */
class SearchService implements IService {
	
	public constructor(private context: IBusiness = $inject("business/searchBusiness")) {}
	
	/**
	 * Gets the Buses given a line or a list of, a bus order or a list of. If the search
	 * params are not given, gets all buses latest data.
	 * 
	 * @param {string} lines/orders
	 * @return {Bus[]}
	 */
	public retrieve(userAgent: string, line?: string): any {
		return (line!==undefined)? this.context.retrieve(userAgent, line.split(",")) : this.context.retrieve(userAgent);
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
export = SearchService;