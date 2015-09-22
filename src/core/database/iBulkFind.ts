/**
 * Bulk Find query response. It's a bulk with information about a subgroup of Documents to be operated over.
 * @interface IBulkFind
 */
interface IBulkFind<T> {
	
	/**
	 * Adds a single document remove operation to a bulk operations list.
	 * @return {void}
	 */
	removeOne(): void;
	
	/**
	 * Adds a remove operation to a bulk operations list.
	 * @return {void}
	 */
	remove(): void;
	
	/**
	 * Adds a single document replacement operation to a bulk operations list.
	 * @return {void}
	 */
	replaceOne(query: any, upsert?: boolean): void;
	
	/**
	 * Adds a single document update operation to a bulk operations list.
	 * @return {void}
	 */
	updateOne(query: any, upsert?: boolean): void;
	
	/**
	 * Adds a multi update operation to a bulk operations list.
	 * @return {void}
	 */
	update(query: any, upsert?: boolean): void;
}
export = IBulkFind;