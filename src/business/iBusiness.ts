/**
 * Classes implementings IBusiness interface are used for controlling the business logics
 * layer.
 * @interface IBusiness
 */
interface IBusiness {
	
	/**
	 * Data creation business logics
	 */
	create(...args: any[]): any;
	
	/**
	 * Data retrieval business logics
	 */
	retrieve(...args: any[]): any;
	
	/**
	 * Data update business logics
	 */
	update(...args: any[]): any;
	
	/**
	 * Data removal business logics
	 */
	delete(...args: any[]): any;
}
export = IBusiness;