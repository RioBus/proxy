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
	private collectionName: string = "bus";
	
	public constructor() {
		this.context = new DbContext();
		this.collection = this.context.collection<Bus>(this.collectionName, new BusModelMap());
	}
	
	public retrieve(data?: string[]): Bus[] {
		var output: Bus[] = (data===undefined)? this.getAllBuses() : this.searchBuses(data);
		return output;
	}
	
	private getAllBuses(): Bus[] {
		return this.collection.find();
	}
	
	private searchBuses(data: string[]): Bus[] {
		var output: Bus[] = this.getByLine(data);
		return (output.length>0)? output : this.getByCode(data);
	}
	
	private getByLine(lines: string[]): Bus[] {
		var query: any[] = [];
		lines.forEach( (line)=>{ query.push({line: line}); });
		return this.collection.find(query);
	}
	
	private getByCode(codes: string[]): Bus[] {
		var query: any[] = [];
		codes.forEach( (code)=>{ query.push({order: code}); });
		return this.collection.find(query);
	}
	
	public delete(): any {}
	
	public create(): any {}
	
	public update(): any {}
}
export = SearchDataAccess;