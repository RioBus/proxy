interface IModelMap {
	preConfig(collection: any): void;
	getInstance<T>(data: any): T;
}
export = IModelMap;