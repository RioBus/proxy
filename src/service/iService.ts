/**
 * IService interface
 * 
 * Prepares the outside data to use inside the application in the business layer
 * @interface IService
 */
interface IService {
	
	/**
	 * Provides integration with the data storage logics
	 */
	create(...args: any[]): any;
	
	/**
	 * Provides integration with the data retrieval logics
	 */
	retrieve(...args: any[]): any;
	
	/**
	 * Provides integration with the data update logics
	 */
	update(...args: any[]): any;
	
	/**
	 * Provides integration with the data removal logics
	 */
	delete(...args: any[]): any;
}
export = IService;