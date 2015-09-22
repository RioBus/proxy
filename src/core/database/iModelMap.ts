/**
 * IModelMap interfaces to configure repository's data modelling
 * @interface IModelMap
 */
interface IModelMap {
	
	/**
	 * @var {string} Collection name
	 */
	collectionName: string;
	
	/**
	 * Configure collection before operate
	 * @param {any} collection Collection context object
	 * @return {void}
	 */
	preConfig(collection: any): void;
	
	/**
	 * Prepares the data to input into the repository
	 * @param {any} data Input param data
	 * @return {any} 
	 */
	prepareToInput(data: any): any;
	
	/**
	 * Gets an T entity model instance from the data retrieved from the repository
	 * @param {any} data Data outputted from the repository
	 * @return {T}
	 */
	getInstance<T>(data: any): T;
}
export = IModelMap;