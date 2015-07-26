/**
 * Classes which implements this interface are used for doing operations over the repository.
 * @interface IDataAccess
 */
interface IDataAccess{
	
	/**
	 * Does data creation operation in the database
	 */
	create(...args: any[]): any;
	
	/**
	 * Does data retrieval operation in the database
	 */
	retrieve(...args: any[]): any;
	
	/**
	 * Does data update operation in the database
	 */
	update(...args: any[]): any;
	
	/**
	 * Does data removal operation in the database
	 */
	delete(...args: any[]): any;
}
export = IDataAccess;