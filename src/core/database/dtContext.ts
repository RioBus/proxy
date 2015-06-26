/// <reference path="../../../defs/tsd.d.ts" />
import Config   = require("../../config");
import Database = require("./database");

class DbContext{
	
	private context: Database;
	
	public constructor(dbConfig?: any){
		this.context = new Database(dbConfig);
	}
	
	public collection(name: string): any{
		return this.context.collection(name);
	}
	
	public edgeCollection(name: string): any{
		return this.context.edgeCollection(name);
	}
	
	public query(queryString: string): any{
		return this.context.query(queryString);
	}
}
export = DbContext;