import Bus 		   = require("../domain/entity/bus");
import BusModelMap = require("../domain/modelMap/busModelMap");
import DbContext   = require("../core/database/dbContext");
import ICollection = require("../core/database/iCollection");
import IDataAccess = require("../dataAccess/iDataAccess");
import $inject 	   = require("../core/inject");

declare var database: DbContext;

/**
 * Does the operations over bus collection.
 * @class SearchDataAccess
 */
class SearchDataAccess implements IDataAccess {
	
	private context: DbContext;
	private collection: ICollection<Bus>;
	private collectionName: string = "bus";
	
	public constructor() {
		this.context = database;
		this.collection = this.context.collection<Bus>(this.collectionName, new BusModelMap());
	}

    /**
     * Retrieves the Bus data.
     * @param {string[]} data Line/order list (optional)
     * @return {Bus[]}
     */
	public retrieve(data?: string[]): Bus[] {
		var output: Bus[] = (data===undefined)? this.getAllBuses() : this.searchBuses(data);
		return output;
	}
	
	/**
	 * Retrieves the data of all of the most recent updates for each bus
	 * @return {Bus[]}
	 */
	private getAllBuses(): Bus[] {
		return this.collection.find();
	}
	
	/**
	 * Retrieves the data of all of the most recent updates for each bus given a list
	 * of line codes or orders.
	 * @param {string[]} data
	 * @return {Bus[]}
	 */
	private searchBuses(data: string[]): Bus[] {
		var output: Bus[] = this.getByLine(data);
		return (output.length>0)? output : this.getByCode(data);
	}
	
	/**
	 * Queries the buses by line code
	 * @param {string[]} lines
	 * @return {Bus[]}
	 */
	private getByLine(lines: string[]): Bus[] {
		return this.collection.find({ line: { $in: lines }});
	}
	
	/**
	 * Queries the buses by order codes
	 * @param {string[]} codes
	 * @return {Bus[]}
	 */
	private getByCode(codes: string[]): Bus[] {
		return this.collection.find({ order: { $in: codes }});
	}
	
	/**
	 * Not implemented.
	 */
	public delete(): any {}
	
	/**
	 * Not implemented.
	 */
	public create(): any {}
	
	/**
	 * Not implemented.
	 */
	public update(): any {}
}
export = SearchDataAccess;