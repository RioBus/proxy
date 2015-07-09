import ICollection 	= require("./iCollection");
import IModelMap	= require("./iModelMap");
import List			= require("../../common/tools/list");

interface IDatabase {
	collection<T>(name: string, map: IModelMap): ICollection<T>;
	close(): void;
}
export = IDatabase;