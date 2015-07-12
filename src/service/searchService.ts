import IBusiness = require("../business/iBusiness");
import IService  = require("./iService");
import $inject 	 = require("../core/inject");

class SearchService implements IService {
	
	public constructor(private context: IBusiness = $inject("business/searchBusiness")) {}
	
	public retrieve(line?: string): any {
		return (line!==undefined)? this.context.retrieve(line.split(",")) : this.context.retrieve();
	}
	
	public delete(): any {}
	
	public create(): any {}
	
	public update(): any {}
}
export = SearchService;