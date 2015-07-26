/// <reference path="../../../defs/node/node.d.ts" />
import ICollection = require("../../core/database/iCollection");
import IModelMap   = require("../../core/database/iModelMap");
import Bus		   = require("../entity/bus");
var Moment		   = require("moment-timezone");

class BusModelMap implements IModelMap {
	
	/**
	 * Configures the collection before doing operations
	 * @return {void}
	 */
	public preConfig(collection: ICollection<Bus>): void {}
	
	/**
	 * Prepares the data used for querying in the database to be used, forcing the fields types
	 * in the database. Use it to guarantee data types before sending the query to the database.
	 * @param {any} data Input data
	 * @return {any} 
	 */
	public prepareToInput(data: any): any {
		if(data.line!==undefined) data.line = data.line.toString();
		if(data.order!==undefined) data.order = data.order.toString();
		if(data.speed!==undefined) {
			data.speed = (data.speed!=="")? parseInt(data.speed) : 0;
		}
		if(data.direction!==undefined){
			data.direction = (data.direction!=="")? parseInt(data.direction) : 0;
		}
		if(data.sense!==undefined) data.sense = data.sense.toString();
		if(data.timestamp!==undefined) data.timestamp = Moment.tz(data.timestamp, "America/Sao_Paulo").format();
		if(data.latitude!==undefined && data.longitude!==undefined){
			data.coordinates = [parseFloat(data.latitude), parseFloat(data.longitude)]; 
		}
		delete data.latitude;
		delete data.longitude;
		return data;
	}
	
	/**
	 * Converts the documents from the database to it's representation in application's entities.
	 * @param {any} data The document from the database
	 * @return {Bus}
	 */
	public getInstance<T>(data: any): Bus {
		return new Bus(data.line, data.order, data.speed, data.direction, data.coordinates[0], data.coordinates[1], data.timestamp, data.sense);
	}
}
export = BusModelMap;