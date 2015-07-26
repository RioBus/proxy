import Factory           = require("../common/factory");
import ICollection       = require("../core/database/iCollection");
import IDataAccess       = require("./iDataAccess");
import Itinerary         = require("../domain/entity/itinerary");
import ItineraryModelMap = require("../domain/modelMap/itineraryModelMap");
import Logger            = require("../common/logger");
import DbContext         = require("../core/database/dbContext");

declare var Config: any, database: DbContext;

/**
 * DataAccess referred to Itinerary stored data
 *
 * Does operations over Itinerary data
 * @class ItineraryDataAccess
 */
class ItineraryDataAccess implements IDataAccess{
    
    private logger: Logger;
    private db: DbContext;
    private collection: ICollection<Itinerary>;
    private collectionName: string = "itinerary";

    public constructor(){
        this.logger = Factory.getLogger();
        this.db = database;
        this.collection = this.db.collection<Itinerary>(this.collectionName, new ItineraryModelMap());
    }

    /**
     * Retrieves the Itinerary data.
     * @param {string} line (optional)
     * @return {Itinerary | Itinerary[]}
     */
	public retrieve(data?: string): Itinerary | Itinerary[] {
        var output = (data!==undefined)? this.getItinerary(data) : this.getItineraries();
        return output;
    }

    /**
     * Retrieves the Itinerary spots given a line
     * @param {string} line
     * @return {Itinerary}
     */
    private getItinerary(line: string): Itinerary{
		return this.collection.findOne({line: line});
    }

    /**
     * Retrieves all the Itineraries
     * @return {Itinerary[]}
     */
    private getItineraries(): Itinerary[]{
        return this.collection.find();
    }
	
	/**
	 * Not implemented.
	 */
	public update(...args: any[]): any {}
	
	/**
	 * Not implemented.
	 */
	public delete(...args: any[]): any {}
	
	/**
	 * Not implemented.
	 */
    public create(...args: any[]): any {}
}
export = ItineraryDataAccess;