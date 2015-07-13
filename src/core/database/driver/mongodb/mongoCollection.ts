import ICollection = require("../../iCollection");
import IModelMap   = require("../../iModelMap");
import Sync   	   = require("../../../sync");

class MongoCollection<T> implements ICollection<T>{
	
	public constructor(private context: any, private map: IModelMap) {
		map.preConfig(this);
	}
	
	count(query: any={}): number {
		query = this.map.prepareToInput(query);
		return Sync.promise(this.context, this.context.count, query);
	}
	
	createIndex(fieldOrSpec: any, options: any = {}): void {
		return Sync.promise(this.context, this.context.ensureIndex, fieldOrSpec, options);
	}
	
	public find(query: any = {}): T[] {
		query = this.map.prepareToInput(query);
		var find: any = Sync.promise(this.context, this.context.find, query);
		var data: Array<any> = Sync.promise(find, find.toArray);
		var list: T[] = new Array<T>();
		data.forEach((obj) => {
			list.push(this.map.getInstance<T>(obj));
		});
		return list;
	}
	
	public findById(id: number): T {
		return this.findOne({id: id});
	}
	
	public findAndModify(query: any, sort: any, update: any, options?: any): T {
		query = this.map.prepareToInput(query);
		var findAndModify: any = Sync.promise(this.context, this.context.findAndModify, query, sort, update, options);
		return (findAndModify.value!==null)? this.map.getInstance<T>(findAndModify.value) : null;
	}
	
	public findOne(query: any, options: any={}): T {
		query = this.map.prepareToInput(query);
		var result: any = Sync.promise(this.context, this.context.findOne, query, options);
		return (result!==null)? this.map.getInstance<T>(result) : null;
	}
	
	public findOrCreate(data: any): T {
		var update: any = { $set: this.map.prepareToInput(data) };
		var options = { "new": true, "upsert": true };
		return this.findAndModify(data, [], update, options);
	}
	
	public save(obj: T): T {
		var data: any = this.map.prepareToInput(obj);
		var saveOperation: any = Sync.promise(this.context, this.context.insert, data);
		return (saveOperation.ops.length>0)? this.map.getInstance<T>(saveOperation.ops[0]) : null;
		// Workaround. depois e necessario corrigir!!!
	}
	
	public update(query: any, data: any, options: any={}): any {
		query = this.map.prepareToInput(query);
		data = this.map.prepareToInput(data);
		var data: any = Sync.promise(this.context, this.context.update, query, data, options);
		return this.map.getInstance<T>(data);
	}
	
	public remove(query: any = {}): boolean {
		query = this.map.prepareToInput(query);
		return Sync.promise(this.context, this.context.remove, query);
	}
}
export = MongoCollection;