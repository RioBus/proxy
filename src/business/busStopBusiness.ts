import IBusiness       = require("../business/iBusiness");
import IDataAccess     = require("../dataAccess/iDataAccess");
import $inject 	   	   = require("../core/inject");
import BusStop         = require("../domain/entity/busStop");

/**
 * BusStop business logics
 * @class BusStopBusiness
 */
class BusStopBusiness implements IBusiness {
	
	public constructor(private context: IDataAccess = $inject("dataAccess/busStopDataAccess")) {}
	
	/**
	 * Retrieves the BusStop for a given line
	 * @param {string} line
	 * @return {BusStop}
	 */
	public retrieve(line: string): BusStop {
		var response: BusStop = this.context.retrieve(line);
		if(response===null) response = new BusStop(line, "desconhecido", "desconhecido", []);
		return response;
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
export = BusStopBusiness;