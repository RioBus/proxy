import File = require("../core/file");
/**
 * Better logging interface
 *
 * @class Logger
 * @constructor
 */
class Logger{
	
	private driver: any;
	private flag: string;
	private fileStream: File;

    public constructor(fileName: string, flag: string) {
        this.driver = console;
        this.flag = (flag)? flag:'RUNTIME';
        this.fileStream = new File(fileName);
    }

    /**
     * Stores the message in the log file and show in the console
     * @param message
     * @param level
     */
    private log(message: string, level: string): void {
        var time = (new Date()).toLocaleString();
        var information = '['+time+'] ['+level+'] '+message;
        this.driver.log(information);
        this.fileStream.append(information);
    }

    /**
     * Information-level message
     * @param message
     */
    public info(message: string): void {
        this.log(message, this.flag + ' - INFO');
    }

    /**
     * Alert-level message
     * @param message
     */
    public alert(message: string): void {
        this.log(message, this.flag + ' - ALERT');
    }

    /**
     * Error-level message
     * @param message
     */
    public error(message: string): void {
        this.log(message, this.flag + ' - ERROR');
    }
}
export = Logger;