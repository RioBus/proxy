import ICollection 	= require("./iCollection");
import IModelMap	= require("./iModelMap");

/**
 * IDatabase interface
 * @interface IDatabase
 */
interface IDatabase {
	
	/**
	 * Accesses the collection and operate with T instances 
	 * @param {string} name
	 * @param {IModelMap} map
	 * @return {ICollection<T>}
	 */
	collection<T>(name: string, map: IModelMap): ICollection<T>;
	
	/**
	 * Closes the connection with the database
	 * @return {void}
	 */
	close(): void;
}
export = IDatabase;