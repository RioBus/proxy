import Bus 		         = require("../domain/entity/bus");
import Itinerary         = require("../domain/entity/itinerary");
import BusModelMap       = require("../domain/modelMap/busModelMap");
import ItineraryModelMap = require("../domain/modelMap/itineraryModelMap");
import DbContext         = require("../core/database/dbContext");
import ICollection       = require("../core/database/iCollection");
import IDataAccess       = require("../dataAccess/iDataAccess");
import $inject 	         = require("../core/inject");

declare var database: DbContext;

/**
 * Does the operations over bus collection.
 * @class SearchDataAccess
 */
class SearchDataAccess implements IDataAccess {
	
	private context: DbContext;
	private collectionBus: ICollection<Bus>;
	private collectionItinerary: ICollection<Itinerary>;
	private collectionNameBus: string = "bus";
	private collectionNameItinerary: string = "itinerary";
	
	public constructor() {
		this.context = database;
		this.collectionBus = this.context.collection<Bus>(this.collectionNameBus, new BusModelMap());
		this.collectionItinerary = this.context.collection<Itinerary>(this.collectionNameItinerary, new ItineraryModelMap());
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
		return this.collectionBus.find();
	}
	
	/**
	 * Retrieves the data of all of the most recent updates for each bus given a list
	 * of line codes or orders.
	 * @param {string[]} data
	 * @return {Bus[]}
	 */
	private searchBuses(data: string[]): Bus[] {
		var output: Bus[] = this.getByLine(data);
		if(output.length === 0) output = this.getByCode(data);
		if(output.length === 0) output = this.getByKeywords(data);
		return output;
	}
	
	/**
	 * Queries the buses by line code
	 * @param {string[]} lines
	 * @return {Bus[]}
	 */
	private getByLine(lines: string[]): Bus[] {
		return this.collectionBus.find({ line: { $in: lines }});
	}
	
	/**
	 * Queries the buses by order codes
	 * @param {string[]} codes
	 * @return {Bus[]}
	 */
	private getByCode(codes: string[]): Bus[] {
		return this.collectionBus.find({ order: { $in: codes }});
	}
	
	private getByKeywords(keyword: string[]): Bus[] {
		var itineraryList: Itinerary[] = this.collectionItinerary.find( { $text: { $search: keyword.join(" ") } } );
		var listLines: string[] = [];
		var listBus: Bus[];
		for(var i = 0; i < itineraryList.length; i++){
			listLines.push(itineraryList[i].getLine());
		}
		listBus = this.getByLine(listLines);
		return listBus;
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