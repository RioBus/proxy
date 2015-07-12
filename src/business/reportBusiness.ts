import IBusiness 	 = require("../business/iBusiness");
import IDataAccess 	 = require("../dataAccess/iDataAccess");
import $inject 		 = require("../core/inject");

class ReportBusiness implements IBusiness {
	
	public constructor(private context: IDataAccess = $inject("dataAccess/reportDataAccess")) {}
	
	public retrieve(minDate: Date, maxDate: Date): any {
		return this.context.retrieve(minDate, maxDate);
	}
	
	public delete(): any {}
	
	public create(): any {}
	
	public update(): any {}
}
export = ReportBusiness;