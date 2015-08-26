import Factory           = require("../common/factory");
import ICollection       = require("../core/database/iCollection");
import IDataAccess       = require("./iDataAccess");
import BusStop           = require("../domain/entity/busStop");
import BusStopModelMap   = require("../domain/modelMap/busStopModelMap");
import Logger            = require("../common/logger");
import DbContext         = require("../core/database/dbContext");

declare var Config: any, database: DbContext;

/**
 * DataAccess referred to BusStop stored data
 *
 * Does operations over BusStop data
 * @class BusStopDataAccess
 */
class BusStopDataAccess implements IDataAccess{
    
    private logger: Logger;
    private db: DbContext;
    private collection: ICollection<BusStop>;
    private collectionName: string = "bus_stop";

    public constructor(){
        this.logger = Factory.getLogger();
        this.db = database;
        this.collection = this.db.collection<BusStop>(this.collectionName, new BusStopModelMap());
    }

    /**
     * Retrieves the BusStop data.
     * @param {string} line 
     * @return {BusStop}
     */
	public retrieve(data: string): BusStop{
        return this.getBusStop(data);
    }

    /**
     * Retrieves the BusStop spots given a line
     * @param {string} line
     * @return {BusStop}
     */
    private getBusStop(line: string): BusStop{
		//var aux = this.collection.find({line: line});
        //return aux[0];
        return this.collection.findOne({line: line});
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
export = BusStopDataAccess;