import Bus 		 = require("../domain/bus");
import IBusiness = require("../business/iBusiness");
import IService  = require("./iService");
import List 	 = require("../common/tools/list");
import $inject 	 = require("../core/inject");

class SearchService implements IService {
	
	public constructor(private context: IBusiness = $inject("business/searchBusiness")) {}
	
	public retrieve(line: string): List<Bus> {
		return this.context.retrieve(line);
	}
	
	public retrieveList(): List<Bus> {
		return this.context.retrieve();
	}
	
	public remove(): any {}
	
	public save(): any {}
	
	public update(): any {}
}
export = SearchService;