import Analytics   = require("../common/analytics");
import Bus 		   = require("../domain/entity/bus");
import Factory	   = require("../common/factory");
import IBusiness   = require("../business/iBusiness");
import IDataAccess = require("../dataAccess/iDataAccess");
import $inject 	   = require("../core/inject");

declare var Config, Strings;

class SearchBusiness implements IBusiness {
	
	private analytics: Analytics;
	
	public constructor(private context: IDataAccess = $inject("dataAccess/searchDataAccess")) {
		this.analytics = Factory.getAnalytics();
	}
	
	public retrieve(userAgent: string, data?: string[]): Bus[] {
		var flag: any = Strings.analytics;
		this.analytics.trackEvent(flag.event.restHit, flag.label.rest, userAgent, (error, response)=>{});
		
		if(data!==undefined && data.length>Config.maxSearchItems){
			data = data.slice(0, Config.maxSearchItems);
			this.analytics.trackEvent(flag.event.restHit, flag.label.busCode, data.join(","), (error, response)=>{});
		} 
		return this.context.retrieve(data);
	}
	
	public delete(): any {}
	
	public create(): any {}
	
	public update(): any {}
}
export = SearchBusiness;