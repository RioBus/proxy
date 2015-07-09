import IBusiness 	 = require("../business/iBusiness");
import IService 	 = require("./iService");
import $inject 		 = require("../core/inject");

class ReportService implements IService {
	
	public constructor(private context: IBusiness = $inject("business/reportBusiness")) {}
	
	public retrieve(minDate: Date, maxDate: Date): any {
		return this.context.retrieve(minDate, maxDate);
	}
	
	public delete(): any {}
	
	public create(): any {}
	
	public update(): any {}
}
export = ReportService;