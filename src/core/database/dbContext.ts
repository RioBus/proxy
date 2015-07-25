/// <reference path="../../../defs/node/node.d.ts" />
import ICollection  = require("./iCollection");
import IDatabase 	= require("./iDatabase");
import IModelMap	= require("./iModelMap");
import $inject 		= require("../inject");

declare var Config: any;

var config: any = (Config.isProduction())?
	Config.environment.production.database : Config.environment.development.database;

class DbContext{
	
	private context: IDatabase;
	
	public constructor(dbConfig?: any){
		if(dbConfig===undefined) dbConfig = config;
		this.context = this.getContext(dbConfig);
	}
	
	public collection<T>(name: string, map: IModelMap): ICollection<T>{
		return this.context.collection<T>(name, map);
	}
	
	private getContext(dbConfig: any): IDatabase {
		var connector = dbConfig.driver.toLowerCase();
		var driverPath = "core/database/driver";
		switch(connector) {
			case "mongodb":
			case "mongo":
				connector = driverPath+"/mongodb/mongoDb";
				break;
			default: break;
		}
		return $inject(connector, dbConfig.config);
	}
	
	public closeConnection(): void{
		this.context.close();
	}
}
export = DbContext;