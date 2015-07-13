import IBusiness 	 = require("../business/iBusiness");
import IService 	 = require("./iService");
import $inject 		 = require("../core/inject");

class LogService implements IService {
	
	public constructor(private context: IBusiness = $inject("business/logBusiness")) {}
	
	public retrieve(type: string, lines: number): string {
		return this.context.retrieve(type, lines);
	}
	
	public delete(): any {}
	
	public create(): any {}
	
	public update(): any {}
}
export = LogService;