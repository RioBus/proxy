import IBulkFind = require("./iBulkFind");
/**
 * Abstracts Bulk operation to insert/update documents in lots
 * @interface IBulk
 */
interface IBulk<T>{
	
	/**
	 * Does the bulk operation
	 * @return {any}
	 */
	execute(): any;
	
	/**
	 * Queries the collection for the document(s)
	 * @param {any} query - query data to find the document
	 * @return {IBulkFind}
	 */
	find(query: any): IBulkFind<T>;
	
	/**
	 * Registers an insert operation within the Bulk
	 * @param {T} obj - Document data
	 * @return {void}
	 */
	insert(obj: T): void;
}
export = IBulk;