import ICollection   = require("../../core/database/iCollection");
import IModelMap 	 = require("../../core/database/iModelMap");
import BusStop 	 = require("../entity/busStop");
import BusStopSpot = require("../entity/busStopSpot");


class BusStopModelMap implements IModelMap {
	
	/**
	 * Configures the collection before doing operations
	 * @return {void}
	 */
	public preConfig(collection: ICollection<BusStop>): void {}
	
	/**
	 * Prepares the data used for querying in the database to be used, forcing the fields types
	 * in the database. Use it to guarantee data types before sending the query to the database.
	 * @param {any} data Input data
	 * @return {any} 
	 */
	public prepareToInput(data: any): any {
		return data;
	}
	
	/**
	 * Converts the documents from the database to it's representation in application's entities.
	 * @param {any} data The document from the database
	 * @return {BusStop}
	 */
	public getInstance<T>(data: any): BusStop {
		var spots: BusStopSpot[] = new Array<BusStopSpot>();
		if(data.spots.length>0){
			data.spots.forEach( (spot)=>{
				spots.push(new BusStopSpot(spot.latitude, spot.longitude, spot.sequential));
			});
		}
		return new BusStop(data.line, data.description, data.agency, spots);
	}
}
export = BusStopModelMap;