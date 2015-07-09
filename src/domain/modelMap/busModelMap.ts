import IModelMap = require("../../core/database/iModelMap");
import Bus		 = require("../entity/bus");

class BusModelMap implements IModelMap {
	
	public getInstance<T>(data: any): Bus {
		return new Bus(data.line, data.order, data.speed, data.direction, data.latitude, data.longitude, data.timestamp, data.sense);
	}
}
export = BusModelMap;