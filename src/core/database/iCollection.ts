import IModelMap = require("./iModelMap");

interface ICollection<T> {
	find(params?: any): Array<T>;
	findById(id: number): T;
	save(obj: T): any;
	update(params: any, data: any): any;
	remove(params: any): any;
}
export = ICollection;