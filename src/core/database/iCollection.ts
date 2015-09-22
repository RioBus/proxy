import IBulk = require("./iBulk");
import IModelMap = require("./iModelMap");
/**
 * Generalizes the NoSQL Collection instance
 * @interface ICollection
 */
interface ICollection<T> {
	
	/**
	 * Calculates aggregate values for the data in a collection.
	 * @param {any[]} pipeline - A sequence of data aggregation operations or stages.
	 * @param {any} options - Optional. Additional options that aggregate() passes to the aggregate command.
	 * @return {any}
	 */
	aggregate(pipeline: any[], options?: any): any;
	
	/**
	 * Returns the count of documents that would match a find() query.
	 * @param {any} query - Optional. The query selection criteria.
	 * @return {number}
	 */
	count(query?: any): number;
	
	/**
	 * Creates indexes on collections.
	 * @param {any} fieldOrSpec - A document that contains the field and value pairs where the field is the index key and the value describes the type of index for that field.
	 * @param {any} options - Optional. A document that contains a set of options that controls the creation of the index.
	 * @return {void}
	 */
	createIndex(fieldOrSpec: any, options?: any): void;
	
	/**
	 * Selects documents in a collection and returns a cursor to the selected documents.
	 * @param {any} query - Optional. The query selection criteria. To return all documents in a collection, omit this parameter or pass an empty document ({}).
	 * @return {T[]}
	 */
	find(query?: any): T[];
	
	/**
	 * Select the document with the given id.
	 * @param {number} id - Document id
	 * @return {T}
	 */
	findById(id: string): T;
	
	/**
	 * Atomically modifies and returns a single document.
	 * @param {any} criteria - The selection criteria for the modification.
	 * @param {any} sort - Determines which document the operation modifies if the query selects multiple documents.
	 * @param {any} update - Performs an update of the selected document.
	 * @param {any} options - Optional. A document that contains a set of options that controls the operation.
	 * @return {T}
	 */
	findAndModify(criteria: any, sort: any, update: any, options?: any): T;
	
	/**
	 * Atomically creates and returns a single document if it does not exist in the collection.
	 * @param {any} data - Data to use as criteria to find the document or save in the collection.
	 * @return {T}
	 */
	findOrCreate(data: any): T;
	
	/**
	 * Performs a query and returns a single document.
	 * @param {any} query - Specifies query selection criteria using query operators. Pass an empty document ({}) to return the first document in the collection.
	 * @param {any} options - Optional. A document that contains a set of options that controls the operation.
	 */
	findOne(query: any, options?: any): T;
	
	/**
	 * Removes documents from a collection.
	 * @param {any} params - Optional. Specifies deletion criteria using query operators.
	 * @param {boolean} justOne - Optional. To limit the deletion to just one document, set to true.
	 * @return {any}
	 */
	remove(params?: any, justOne?: boolean): any;
	
	/**
	 * Saves a document into a collection.
	 * @param {T} obj - A document to insert into the collection.
	 * @return {any}
	 */
	save(obj: T): any;
	
	/**
	 * Modifies an existing document or documents in a collection.
	 * @param {any} criteria - The selection criteria for the update.
	 * @param {any} update - The modifications to apply.
	 * @param {any} options - Optional. A document that contains a set of options that controls the operation.
	 */
	update(criteria: any, update: any, options?: any): any;
	
	/**
	 * Initializes and returns a new Bulk() operations builder for a collection. The builder constructs an ordered or unordered list of write operations that MongoDB executes in bulk depending on your choice.
	 * @param{boolean} ordered - Optional. Set to true to construct an ordered list of operations. Default value set to false.
	 * @return {IBulk<T>}
	 */
	initBulk(ordered?: boolean, options?: any): IBulk<T>;
}
export = ICollection;