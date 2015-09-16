'use strict';
var File = require('../core/file');

/**
 * Better logging interface
 *
 * @class Logger
 * @constructor
 */
class Logger{

    constructor(fileName, flag){
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
        let time = (new Date()).toLocaleString();
        let information = '['+time+']['+level+'] '+message;
        this.driver.log(information);
        this.fileStream.append(information);
    }

    /**
     * Information-level message
     * @param message
     */
    info(message){
        this.log(message, this.flag + ' - INFO');
    }

    /**
     * Alert-level message
     * @param message
     */
    alert(message){
        this.log(message, this.flag + ' - ALERT');
    }

    /**
     * Error-level message
     * @param message
     */
    error(message){
        this.log(message, this.flag + ' - ERROR');
    }
}
module.exports = Logger;