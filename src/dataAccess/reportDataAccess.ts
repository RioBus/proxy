import IDataAccess = require("../dataAccess/iDataAccess");
import $inject 	   = require("../core/inject");

class ReportDataAccess implements IDataAccess {
	
	public retrieve(minDate: Date, maxDate: Date): any {}
	
	public delete(): any {}
	
	public create(): any {}
	
	public update(): any {}
}
export = ReportDataAccess;