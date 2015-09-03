import Analytics   = require("../common/analytics");
import Bus 		   = require("../domain/entity/bus");
import Factory	   = require("../common/factory");
import IBusiness   = require("../business/iBusiness");
import IDataAccess = require("../dataAccess/iDataAccess");
import $inject 	   = require("../core/inject");

declare var Config, Strings;

/**
 * Bus search business logics
 * @class SearchBusiness
 */
class SearchBusiness implements IBusiness {
	
	private analytics: Analytics;
	
	public constructor(private context: IDataAccess = $inject("dataAccess/searchDataAccess")) {
		this.analytics = Factory.getAnalytics();
	}
	
	/**
	 * Retrieves the Bus data for a given line
	 * @param {string} userAgent for track event in Google Analytics
	 * @param {string} line
	 * @param {boolean} mustLimit
	 * @return {Bus[]}
	 */
	public retrieve(userAgent: string, data?: string[], mustLimit?: boolean): Bus[] {
		var flag: any = Strings.analytics;
		this.analytics.trackEvent(flag.event.restHit, flag.label.rest, userAgent, (error, response)=>{});
		
		if(data!==undefined && data.length>Config.maxSearchItems && mustLimit === true){
			data = data.slice(0, Config.maxSearchItems);
		} 
		this.analytics.trackEvent(flag.event.restHit, flag.label.busCode, data.join(","), (error, response)=>{});
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