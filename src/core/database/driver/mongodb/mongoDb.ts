/// <reference path="../../../../../defs/node/node.d.ts" />
import ICollection 		= require("../../iCollection");
import IDatabase   		= require("../../iDatabase");
import IModelMap		= require("../../iModelMap");
import List 	   		= require("../../../../common/tools/list");
import MongoCollection  = require("./mongoCollection");
import Sync		   		= require("../../../sync");
var MongoClient    		= require('mongodb').MongoClient;

class MongoDb implements IDatabase {
	
	private context: any;
	
	public constructor(dbConfig: any){
		var url: string = "mongodb://"+dbConfig.host+":"+dbConfig.port+"/"+dbConfig.dbName;
		var context: any = Sync.promise(MongoClient, MongoClient.connect, url);
		if(context instanceof Error) throw context;
		this.context = context;
	}
	
	public collection<T>(name: string, map: IModelMap): ICollection<T> {
		var collection: any = Sync.promise(this.context, this.context.collection, name);
		if(collection instanceof Error) throw collection;
		return new MongoCollection<T>(collection, map);
	}
	
	public close(): void{
		this.context.close();
	}
}
export = MongoDb;