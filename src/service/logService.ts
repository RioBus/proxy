import IBusiness 	 = require("../business/iBusiness");
import IService 	 = require("./iService");
import ItinerarySpot = require("../domain/itinerarySpot");
import List 		 = require("../common/tools/list");
import $inject 		 = require("../core/inject");

class LogService implements IService {
	
	public constructor(private context: IBusiness = $inject("business/logBusiness")) {}
	
	public retrieve(type: string, lines: number): any {
		return this.context.retrieve(type, lines);
	}
	
	public retrieveList(): any {}
	
	public remove(): any {}
	
	public save(): any {}
	
	public update(): any {}
}
export = LogService;