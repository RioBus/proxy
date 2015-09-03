import Bus 		   = require("../domain/entity/bus");
import IBusiness   = require("../business/iBusiness");
import IDataAccess = require("../dataAccess/iDataAccess");
import $inject 	   = require("../core/inject");

declare var Config;

/**
 * Bus search business logics
 * @class SearchBusiness
 */
class SearchBusiness implements IBusiness {
	
	public constructor(private context: IDataAccess = $inject("dataAccess/searchDataAccess")) {}
	
	/**
	 * Retrieves the Bus data for a given line
	 * @param {string} userAgent for track event in Google Analytics
	 * @param {string} line
	 * @param {boolean} mustLimit
	 * @return {Bus[]}
	 */
	public retrieve(userAgent: string, data?: string[], mustLimit?: boolean): Bus[] {
		if(data!==undefined){
			var max: number = Config.maxSearchItems;
			if(data.length>max && mustLimit){
				data = data.slice(0, max);
			}
		} 
		return this.context.retrieve(data);
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
export = SearchBusiness;