import File		   = require("../core/file");
import IDataAccess = require("../dataAccess/iDataAccess");
import $inject 	   = require("../core/inject");

/**
 * Provides an API to access the application logs.
 * @class LogDataAccess
 */
class LogDataAccess implements IDataAccess {
	
	/**
	 * Reads the given log to the memory.
	 * @param {string} logPath
	 * @param {number} lines
	 * @return {string[]}
	 */
	public retrieve(logPath: string, lines: number): string[] {
		var file: File = new File(logPath);
		return file.read().split("\n").reverse().filter((n)=>{ return n!==""; }).slice(0, lines);
	}
	
	/**
	 * Not implemented.
	 */
	public delete(): any {}
	
	/**
	 * Not implemented.
	 */
	public create(): any {}
	
	/**
	 * Not implemented.
	 */
	public update(): any {}
}
export = LogDataAccess;