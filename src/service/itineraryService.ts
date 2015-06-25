import IService = require("./iService");
import ItinerarySpot = require("../domain/itinerarySpot");
import List = require("../common/tools/list");
import $inject = require("../core/inject");
import IBusiness = require("../business/iBusiness");

class ItineraryService implements IService {
	
	public constructor(private context: IBusiness = $inject("business/itineraryBusiness")) {}
	
	public retrieve(line: string): List<ItinerarySpot> {
		return this.context.retrieve(line);
	}
	
	public retrieveList(): any {}
	
	public remove(): any {}
	
	public save(): any {}
	
	public update(): any {}
}
export = ItineraryService;