/// <reference path="../../defs/node/node.d.ts" />
import File = require("../core/file");
/**
 * Better logging interface
 *
 * @class Logger
 * @constructor
 */
class Logger{
	
	private driver:any;
	private flag:string;
	private fileStream:File;

    constructor(fileName, flag){
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
    log(message, level){
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
    info(message){
        "use strict";
        this.log(message, this.flag + ' - INFO');
    }

    /**
     * Alert-level message
     * @param message
     */
    alert(message){
        "use strict";
        this.log(message, this.flag + ' - ALERT');
    }

    /**
     * Error-level message
     * @param message
     */
    error(message){
        "use strict";
        this.log(message, this.flag + ' - ERROR');
    }
}
export = Logger;