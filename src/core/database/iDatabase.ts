import ICollection 	= require("./iCollection");
import IModelMap	= require("./iModelMap");

interface IDatabase {
	collection<T>(name: string, map: IModelMap): ICollection<T>;
	close(): void;
}
export = IDatabase;