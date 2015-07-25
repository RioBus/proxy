import IBusiness 	 = require("../business/iBusiness");
import IService 	 = require("./iService");
import $inject 		 = require("../core/inject");

/**
 * Retrieves log information.
 * @class LogService
 */
class LogService implements IService {
	
	public constructor(private context: IBusiness = $inject("business/logBusiness")) {}
	
	/**
	 * Gets the Logs for a given level
	 * @param {string} type: Log level
	 * @param {number} lines: number of lines to show
	 */
	public retrieve(type: string, lines: number): string {
		return this.context.retrieve(type, lines);
	}
	
	/**
	 * Not implemented.
	 * @return {void}
	 */
	public delete(): any {}
	
	/**
	 * Not implemented.
	 * @return {void}
	 */
	public create(): any {}
	
	/**
	 * Not implemented.
	 * @return {void}
	 */
	public update(): any {}
}
export = LogService;