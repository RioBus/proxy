/// <reference path="../../../defs/tsd.d.ts" />
import Config = require("../../config");
import Sync   = require("../sync");
var Driver 	  = require("arangojs");

class Database{
	
	private context: any;
	
	public constructor(dbConfig?: any){
		if(dbConfig===undefined){
			dbConfig = (Config.isProduction())?
				Config.environment.production.database : Config.environment.development.database;
		}
		var db = new Driver(dbConfig);
		try{
			this.context = Sync.promise(db, db.database, dbConfig.databaseName);
		} catch(e){
			this.context = Sync.promise(db, db.createDatabase, dbConfig.databaseName);
		}
	}
	
	public collection(name: string): any{
		try{
			return Sync.promise(this.context, this.context.collection, name);
		} catch(e){
			return Sync.promise(this.context, this.context.createCollection, name);
		}
	}
	
	public edgeCollection(name: string): any{
		try{
			return Sync.promise(this.context, this.context.edgeCollection, name);
		} catch(e){
			return Sync.promise(this.context, this.context.createEdgeCollection, name);
		}
	}
	
	public query(queryString: string): any{
		return Sync.promise(this.context, this.context.query, queryString);
	}
}
export = Database;