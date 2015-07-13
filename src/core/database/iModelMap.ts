interface IModelMap {
	preConfig(collection: any): void;
	prepareToInput(data: any): any;
	getInstance<T>(data: any): T;
}
export = IModelMap;