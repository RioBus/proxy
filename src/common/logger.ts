/// <reference path="../../defs/tsd.d.ts" />
import File = require("../core/file");
/**
 * Better logging interface
 *
 * @class Logger
 * @constructor
 */
class Logger{
	
	private driver: any;
	private flag: String;
	private fileStream: File;

    public constructor(fileName: String, flag: String){
        "use strict";
        this.driver = console;
        this.flag = (flag)? flag:'RUNTIME';
        this.fileStream = new File(fileName);
    }

    /**
     * Stores the message in the log file and show in the console
     * @param message
     * @param level
     */
    private log(message: String, level: String): void{
        "use strict";
        var time = (new Date()).toLocaleString();
        var information = '['+time+']['+level+'] '+message;
        this.driver.log(information);
        this.fileStream.append(information);
    }

    /**
     * Information-level message
     * @param message
     */
    public info(message: String): void{
        "use strict";
        this.log(message, this.flag + ' - INFO');
    }

    /**
     * Alert-level message
     * @param message
     */
    public alert(message: String): void{
        "use strict";
        this.log(message, this.flag + ' - ALERT');
    }

    /**
     * Error-level message
     * @param message
     */
    public error(message: String): void{
        "use strict";
        this.log(message, this.flag + ' - ERROR');
    }
}
export = Logger;