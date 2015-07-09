import ICollection = require("../../iCollection");
import IModelMap   = require("../../iModelMap");
import Sync   	   = require("../../../sync");

class MongoCollection<T> implements ICollection<T>{
	
	public constructor(private context: any, private map: IModelMap) {}
	
	public find(params?: any): Array<T>{
		if(params===undefined) params = {};
		var find: any = Sync.promise(this.context, this.context.find, params);
		var data: Array<any> = Sync.promise(find, find.toArray);
		var list = new Array<T>();
		data.forEach((obj) => {
			list.push(this.map.getInstance<T>(obj));
		});
		return list;
	}
	
	public findById(id: number): T{
		var find: any = Sync.promise(this.context, this.context.find, {id: id});
		var data: Array<any> = Sync.promise(find, find.toArray);
		return (data.length>0)? this.map.getInstance<T>(data[0]) : null;
	}
	
	public save(obj: T): T {
		var data: any = Sync.promise(this.context, this.context.insert, obj);
		return this.map.getInstance<T>(data);
	}
	
	public update(params: any, data: any): any {
		var data: any = Sync.promise(this.context, this.context.update, params, { $set: data });
		return this.map.getInstance(data);
	}
	
	public remove(params: any): boolean {
		return Sync.promise(this.context, this.context.remove, params);
	}
}
export = MongoCollection;