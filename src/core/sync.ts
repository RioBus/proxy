/// <reference path="../../defs/tsd.d.ts" />
var DeAsync = require("deasync");

class Sync {
	
	public static run(operation: Function, ...params: any[]): any {
		return DeAsync(operation).apply(operation, params);
	}
	
	public static promise(context:any, operation: Function, ...params: any[]): any {
		return DeAsync(operation).apply(context, params);
	}
}
export = Sync;