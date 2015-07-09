import IBusiness = require("../business/iBusiness");
import IService  = require("./iService");
import $inject 	 = require("../core/inject");

class ItineraryService implements IService {
	
	public constructor(private context: IBusiness = $inject("business/itineraryBusiness")) {}
	
	public retrieve(line: string): any {
		return this.context.retrieve(line);
	}
	
	public delete(): any {}
	
	public create(): any {}
	
	public update(): any {}
}
export = ItineraryService;