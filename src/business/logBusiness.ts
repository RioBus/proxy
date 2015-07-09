import Config	   = require("../config");
import IBusiness   = require("../business/iBusiness");
import IDataAccess = require("../dataAccess/iDataAccess");
import LogType	   = require("../common/logType");
import $inject 	   = require("../core/inject");

class LogBusiness implements IBusiness {
	
	public constructor(private context: IDataAccess = $inject("dataAccess/logDataAccess")) {}
	
	public retrieve(logType: number, lines: string): any {
		var logPath: string = this.getLogFilePath(logType);
		return this.context.retrieve(logPath, lines);
	}
	
	public delete(): any {}
	
	public create(): any {}
	
	public update(): any {}
	
	private getLogFilePath(logType: number): string {
		switch(logType) {
			case LogType.DATA_PROVIDER: return Config.log.dataProvider;
			case LogType.SERVER: return Config.log.server;
			case LogType.RUNTIME: default: return Config.log.runtime;
		}
	}
}
export = LogBusiness;