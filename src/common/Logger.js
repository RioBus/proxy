import {Utils} from './utils';

/**
 * Better logging interface
 *
 * @class Logger
 * @constructor
 */
export class Logger{

    constructor(fileName, flag){
        "use strict";
        this.driver = console;
        this.filePath = fileName;
        this.flag = (flag)? flag:'RUNTIME';
        this.fileStream = require('fs');
    }

    /**
     * Stores the message in the log file and show in the console
     * @param message
     * @param level
     */
    log(message, level){
        "use strict";
        let time = Utils.getTimestamp();
        let information = '['+time+']['+level+'] '+message;
        this.driver.log(information);
        this.fileStream.appendFile(this.filePath, information+'\n', function(e){ if(e) throw e; });
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