import Bus 		   = require("../domain/bus");
import IBusiness   = require("../business/iBusiness");
import IDataAccess = require("../dataAccess/iDataAccess");
import List 	   = require("../common/tools/list");
import $inject 	   = require("../core/inject");

class SearchBusiness implements IBusiness {
	
	public constructor(private context: IDataAccess = $inject("dataAccess/searchDataAccess")) {}
	
	public retrieve(data: string): List<Bus> {
		return this.context.retrieve(data);
	}
	
	public retrieveList(): List<Bus> {
		return this.context.retrieveList();
	}
	
	public remove(): any {}
	
	public save(): any {}
	
	public update(): any {}
}
export = SearchBusiness;