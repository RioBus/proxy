import IBulkFind = require("../../iBulkFind");
import IModelMap = require("../../iModelMap");

/**
 * Bulk Find query response. It's a bulk with information about a subgroup of Documents to be operated over.
 * @interface IBulkFind
 * @class MongoBulkFind
 */
class MongoBulkFind<T> implements IBulkFind<T> {
	
	public constructor(private context: any, private map: IModelMap) {}
	
	/**
	 * Adds a single document remove operation to a bulk operations list.
	 * @return {void}
	 */
	public removeOne(): void {
		this.context.removeOne();
	}
	
	/**
	 * Adds a remove operation to a bulk operations list.
	 * @return {void}
	 */
	public remove(): void {
		this.context.remove();
	}
	
	/**
	 * Adds a single document replacement operation to a bulk operations list.
	 * @return {void}
	 */
	public replaceOne(query: any, upsert?: boolean): void {
		var data: any = this.map.prepareToInput(query);
		var context: any = (upsert)? this.context.upsert() : this.context;
		context.replaceOne(data);
	}
	
	/**
	 * Adds a single document update operation to a bulk operations list.
	 * @return {void}
	 */
	public updateOne(query: any, upsert?: boolean): void {
		var data: any = { $set: this.map.prepareToInput(query) };
		var context: any = (upsert)? this.context.upsert() : this.context;
		context.updateOne(data);
	}
	
	/**
	 * Adds a multi update operation to a bulk operations list.
	 * @return {void}
	 */
	public update(query: any, upsert?: boolean): void {
		var data: any = { $set: this.map.prepareToInput(query) };
		var context: any = (upsert)? this.context.upsert() : this.context;
		context.update(data);
	}
}
export = MongoBulkFind;