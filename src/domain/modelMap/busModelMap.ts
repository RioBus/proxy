/// <reference path="../../../defs/node/node.d.ts" />
import ICollection = require("../../core/database/iCollection");
import IModelMap   = require("../../core/database/iModelMap");
import Bus		   = require("../entity/bus");
var Moment		   = require("moment-timezone");

class BusModelMap implements IModelMap {
	
	public preConfig(collection: ICollection<Bus>): void {
		collection.createIndex({line: 1});
		collection.createIndex({order: 1});
	}
	
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
	
	public getInstance<T>(data: any): Bus {
		if(data!==null)
			return new Bus(data.line, data.order, data.speed, data.direction, data.coordinates[0], data.coordinates[1], data.timestamp, data.sense, data._id);
		return null;
	}
}
export = BusModelMap;