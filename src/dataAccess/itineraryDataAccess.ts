import Factory           = require("../common/factory");
import File              = require("../core/file");
import ICollection       = require("../core/database/iCollection");
import HttpRequest       = require("../core/httpRequest");
import IDataAccess       = require("./iDataAccess");
import Itinerary         = require("../domain/entity/itinerary");
import ItinerarySpot     = require("../domain/entity/itinerarySpot");
import ItineraryModelMap = require("../domain/modelMap/itineraryModelMap");
import Logger            = require("../common/logger");
import Strings           = require("../strings");
import DbContext         = require("../core/database/dbContext");

declare var Config: any, database: DbContext;
/**
 * DataAccess referred to Itinerary stored data
 *
 * Does operations over Itinerary data
 * @class ItineraryDataAccess
 * @constructor
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
    
	public retrieve(data?: string): Itinerary | Itinerary[] {
        var output = (data!==undefined)? this.getItinerary(data) : this.getItineraries();
        return output;
    }

    /**
     * Retrieves the Itinerary spots given a line
     * @param {String} line
     * @return List<Itinerary>
     */
    private getItinerary(line: string): Itinerary{
		return this.collection.findOne({line: line});
    }
    
    private getItineraries(): Itinerary[]{
        return this.collection.find();
    }
    
	public update(...args: any[]): any {}
    
	public delete(...args: any[]): any {}
    
    public create(...args: any[]): any {}
}
export = ItineraryDataAccess;