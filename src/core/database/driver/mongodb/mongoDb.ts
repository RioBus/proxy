/// <reference path="../../../../../defs/tsd.d.ts" />
import ICollection 		= require("../../iCollection");
import IDatabase   		= require("../../iDatabase");
import IModelMap		= require("../../iModelMap");
import MongoCollection  = require("./mongoCollection");
import Sync		   		= require("../../../sync");
var MongoClient    		= require('mongodb').MongoClient;

class MongoDb implements IDatabase {
	
	private context: any;
	
	public constructor(dbConfig: any){
		var url: string;
		if(dbConfig.user!=="" && dbConfig.pass!=="")
			url = "mongodb://"+dbConfig.user+":"+dbConfig.pass+"@"+dbConfig.host+":"+dbConfig.port+"/"+dbConfig.dbName;
		else
			url = "mongodb://"+dbConfig.host+":"+dbConfig.port+"/"+dbConfig.dbName;
		var context: any = Sync.promise(MongoClient, MongoClient.connect, url);
		if(context instanceof Error) throw context;
		this.context = context;
	}
	
	/**
	 * Accesses the collection and operate with T instances 
	 * @param {string} name
	 * @param {IModelMap} map
	 * @return {ICollection<T>}
	 */
	public collection<T>(name: string, map: IModelMap): ICollection<T> {
		var collection: any = Sync.promise(this.context, this.context.collection, name);
		if(collection instanceof Error) throw collection;
		return new MongoCollection<T>(collection, map);
	}
	
	/**
	 * Closes the connection with the database
	 * @return {void}
	 */
	public close(): void{
		this.context.close();
	}
}
export = MongoDb;