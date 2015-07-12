import ICollection = require("../../iCollection");
import IModelMap   = require("../../iModelMap");
import Sync   	   = require("../../../sync");

class MongoCollection<T> implements ICollection<T>{
	
	public constructor(private context: any, private map: IModelMap) {
		map.preConfig(this);
	}
	
	count(query: any={}): number {
		return Sync.promise(this.context, this.context.count, query);
	}
	
	createIndex(fieldOrSpec: any, options: any = {}): void {
		return Sync.promise(this.context, this.context.ensureIndex, fieldOrSpec, options);
	}
	
	public find(params: any = {}): Array<T> {
		var find: any = Sync.promise(this.context, this.context.find, params);
		var data: Array<any> = Sync.promise(find, find.toArray);
		var list = new Array<T>();
		data.forEach((obj) => {
			list.push(this.map.getInstance<T>(obj));
		});
		return list;
	}
	
	public findById(id: number): T {
		return this.findOne({id: id});
	}
	
	public findAndModify(criteria: any, sort: any, update: any, options?: any): T {
		var findAndModify: any = Sync.promise(this.context, this.context.findAndModify, criteria, sort, update, options);
		return (findAndModify.value!==null)? this.map.getInstance<T>(findAndModify.value) : null;
	}
	
	public findOne(query: any, options: any={}): T {
		var result: any = Sync.promise(this.context, this.context.findOne, query, options);
		return (result!==null)? this.map.getInstance<T>(result) : null;
	}
	
	public findOrCreate(data: any): T {
		var update: any = { $set: data }; 
		var options = { new: true, upsert: true };
		return this.map.getInstance<T>(this.findAndModify(data, [], update, options) );
	}
	
	public save(obj: T): T {
		var saveOperation: any = Sync.promise(this.context, this.context.insert, obj);
		return (saveOperation.ops.length>0)? this.map.getInstance<T>(saveOperation.ops[0]) : null;
		// Workaround. depois e necessario corrigir!!!
	}
	
	public update(query: any, data: any, options: any={}): any {
		var data: any = Sync.promise(this.context, this.context.update, query, data, options);
		return this.map.getInstance<T>(data);
	}
	
	public remove(query: any = {}): boolean {
		return Sync.promise(this.context, this.context.remove, query);
	}
}
export = MongoCollection;