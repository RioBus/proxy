import ICollection = require("../../iCollection");
import IModelMap   = require("../../iModelMap");
import Sync   	   = require("../../../sync");

/**
 * MongoDb collection driver
 * @class MongoCollection
 */
class MongoCollection<T> implements ICollection<T>{
	
	public constructor(private context: any, private map?: IModelMap) {
		if(map!==undefined) map.preConfig(this);
	}
	
	private getData(data: any): any {
		return (this.map!==undefined)? this.map.getInstance<T>(data) : data;
	}
	
	/**
	 * Aggregates the collection data.
	 * @param {any[]} commands
	 * @param {any} options
	 * @return {T[] | void}
	 */
	public aggregate(commands: any[], options: any = {}): T[] | void {
		if(options.out===undefined){
			var output: any[] = Sync.promise(this.context, this.context.aggregate, commands, options);
			var result: T[] = Array<T>();
			if(output.length>0) output.forEach( (data)=>{ result.push(this.getData(data)); }, this);
			return result;
		}
		else this.context.aggregate(commands, options, (error, out)=>{ if(error) throw error; });
	}
	
	/**
	 * Counts the number of documents resulted from the given query.
	 * @param {any} Query
	 * @return number
	 */
	public count(query: any={}): number {
		query = this.map.prepareToInput(query);
		return Sync.promise(this.context, this.context.count, query);
	}
	
	/**
	 * Creates indexes in the collection.
	 * @param {string|Object} fieldOrSpec
	 * @param {any} options
	 * @return {void} 
	 */
	public createIndex(fieldOrSpec: any, options: any = {}): void {
		this.context.ensureIndex(fieldOrSpec, options, ()=>{});
	}
	
	/**
	 * Queries the collection.
	 * @param {any} query
	 * @return {T[]}
	 */
	public find(query: any = {}): T[] {
		//query = this.map.prepareToInput(query); // It had problemas with queries with special attributes. Need to fix later.
		var find: any = Sync.promise(this.context, this.context.find, query);
		var data: any[] = Sync.promise(find, find.toArray);
		var list: T[] = new Array<T>();
		data.forEach((obj) => {
			list.push(this.getData(obj));
		}, this);
		return list;
	}
	
	/**
	 * Get a document by ID
	 * @param {number} id
	 * @return {T}
	 */
	public findById(id: number): T {
		return this.findOne({_id: id});
	}
	
	/**
	 * Queries for a document in the collection and updates it if exists.
	 * @param {any} query
	 * @param {any} sort
	 * @param {any} update
	 * @param {any} options
	 * @return {T}
	 */
	public findAndModify(query: any, sort: any, update: any, options?: any): T {
		query = this.map.prepareToInput(query);
		var findAndModify: any = Sync.promise(this.context, this.context.findAndModify, query, sort, update, options);
		return (findAndModify.value!==null)? this.getData(findAndModify.value) : null;
	}
	
	/**
	 * Gets the first document of the query.
	 * @param {any} query
	 * @param {any} options
	 * @return {T}
	 */
	public findOne(query: any, options: any={}): T {
		query = this.map.prepareToInput(query);
		var result: any = Sync.promise(this.context, this.context.findOne, query, options);
		return (result!==null)? this.getData(result) : null;
	}
	
	/**
	 * Queries for the element and creates it if not found.
	 * @param {any} data
	 * @return {T}
	 */
	public findOrCreate(data: any): T {
		var update: any = { $set: this.map.prepareToInput(data) };
		var options = { "new": true, "upsert": true };
		return this.findAndModify(data, [], update, options);
	}
	
	/**
	 * Saves the object as a new document.
	 * @param {T} obj
	 * @return {T}
	 */
	public save(obj: T): T {
		var data: any = this.map.prepareToInput(obj);
		var saveOperation: any = Sync.promise(this.context, this.context.insert, data);
		return (saveOperation.ops.length>0)? this.getData(saveOperation.ops[0]) : null;
		// Workaround. depois e necessario corrigir!!!
	}
	
	/**
	 * Does an update operation in the collection.
	 * @param {any} query
	 * @param {any} data
	 * @param {any} options
	 * @return {any}
	 */
	public update(query: any, data: any, options: any={}): any {
		query = this.map.prepareToInput(query);
		data = this.map.prepareToInput(data);
		var data: any = Sync.promise(this.context, this.context.update, query, data, options);
		return this.getData(data);
	}
	
	/**
	 * Does an deletion operation in the collection.
	 * @param {any} query
	 * @return {boolean}
	 */
	public remove(query: any = {}): boolean {
		query = this.map.prepareToInput(query);
		return Sync.promise(this.context, this.context.remove, query);
	}
}
export = MongoCollection;