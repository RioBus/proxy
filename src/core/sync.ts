declare var require;

var DeAsync = require("deasync");

/**
 * Synchronizes asynchronous functions
 * @class Sync
 */
class Sync {
	
	/**
	 * Run a function synchronously
	 * @param {Function} operation Function pointer
	 * @params {any[]} params Function parameters
	 * @return {any}
	 */
	public static run(operation: Function, ...params: any[]): any {
		return DeAsync(operation).apply(operation, params);
	}
	
	/**
	 * Runs a asynchronous method which returns a Promise synchronously
	 * @param {any} context Object where the method came from 
	 * @param {Function} operation Function pointer
	 * @params {any[]} params Method parameters
	 * @return {any}
	 */
	public static promise(context:any, operation: Function, ...params: any[]): any {
		return DeAsync(operation).apply(context, params);
	}
}
export = Sync;