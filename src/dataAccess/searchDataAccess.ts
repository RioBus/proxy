import Bus 		   = require("../domain/entity/bus");
import BusModelMap = require("../domain/modelMap/busModelMap");
import DbContext   = require("../core/database/dbContext");
import ICollection = require("../core/database/iCollection");
import IDataAccess = require("../dataAccess/iDataAccess");
import Sync		   = require("../core/sync");
import $inject 	   = require("../core/inject");

class SearchDataAccess implements IDataAccess {
	
	private context: DbContext;
	private collection: ICollection<Bus>;
	private collectionName: string = "buses";
	
	public constructor() {
		this.context = new DbContext();
		this.collection = this.context.collection<Bus>(this.collectionName, new BusModelMap);
	}
	
	public retrieve(data?: string): Bus[] {
		var output: Bus[] = (data===undefined)? this.getAllBuses() : this.searchBuses(data.split(","));  
		this.context.closeConnection();
		return output;
	}
	
	private getAllBuses(): Bus[] {
		return this.collection.find();
	}
	
	private searchBuses(data: string[]): Bus[] {
		return null;
	}
	
	public delete(): any {}
	
	public create(): any {}
	
	public update(): any {}
}
export = SearchDataAccess;