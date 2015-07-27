import IModelMap = require("./iModelMap");

/**
 * Generalizes the NoSQL Collection instance
 * @interface ICollection
 */
interface ICollection<T> {
	aggregate(commands: any[], options?: any): any;
	count(query?: any): number;
	createIndex(fieldOrSpec: any, options?: any): void;
	find(query?: any): T[];
	findById(id: number): T;
	findAndModify(criteria: any, sort: any, update: any, options?: any): T;
	findOrCreate(data: any): T;
	findOne(query: any, options?: any): T;
	remove(params?: any): any;
	save(obj: T): any;
	update(criteria: any, update: any, options?: any): any;
}
export = ICollection;