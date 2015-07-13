import Bus 		   = require("../domain/entity/bus");
import Config	   = require("../config");
import IBusiness   = require("../business/iBusiness");
import IDataAccess = require("../dataAccess/iDataAccess");
import List 	   = require("../common/tools/list");
import $inject 	   = require("../core/inject");

class SearchBusiness implements IBusiness {
	
	public constructor(private context: IDataAccess = $inject("dataAccess/searchDataAccess")) {}
	
	public retrieve(data?: string[]): Bus[] {
		if(data!==undefined && data.length>Config.maxSearchItems){
			data = data.slice(0, Config.maxSearchItems);
		} 
		return this.context.retrieve(data);
	}
	
	public delete(): any {}
	
	public create(): any {}
	
	public update(): any {}
}
export = SearchBusiness;