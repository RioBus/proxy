import IBusiness   = require("../business/iBusiness");
import IDataAccess = require("../dataAccess/iDataAccess");
import LogType	   = require("../common/logType");
import $inject 	   = require("../core/inject");

declare var Config: any;

/**
 * Log access business logics
 * @class LogBusiness
 */
class LogBusiness implements IBusiness {
	
	public constructor(private context: IDataAccess = $inject("dataAccess/logDataAccess")) {}
	
	/**
	 * Retrieves the logs of a given type
	 * @param {number} logType code
	 * @param {number} lines
	 * @return {string}
	 */
	public retrieve(logType: number, lines: number): string {
		var logPath: string = this.getLogFilePath(logType);
		try{
			return this.context.retrieve(logPath, lines).join("\n");
		} catch (e) {
			return "";
		}
	}
	
	/**
	 * Gets the log file path for the given logType code
	 * @param {number} logType
	 * @return {string}
	 */
	private getLogFilePath(logType: number): string {
		switch(logType) {
			case LogType.DATA_PROVIDER: return Config.log.dataProvider;
			case LogType.SERVER: return Config.log.server;
			case LogType.RUNTIME: default: return Config.log.runtime;
		}
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
export = LogBusiness;