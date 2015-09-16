'use strict';
var Logger = require('./logger');

/**
 * Factory Helper
 *
 * Factories main objects to help decoupling the code
 */
class Factory{

    /**
     * Gets the configuration data object
     * @returns {exports|*}
     */
    static getConfig(){
        return require('../config');
    }

    /**
     * Gets a new Logger instance
     * @param filePath Log file path
     * @param flag Log flag (default: RUNTIME)
     * @returns {Logger}
     */
    static getLogger(filePath, flag){
        if(!filePath) filePath = Factory.getConfig().runtimeLog;
        if(!flag) flag = '';
        return new Logger(filePath, flag);
    }

    /**
     * Gets a new Logger instance to log runtime messages
     * @returns {Logger}
     */
    static getRuntimeLogger(){
        let runtimeLogPath = Factory.getConfig().runtimeLog;
        return Factory.getLogger(runtimeLogPath, 'RUNTIME');
    }

    /**
     * Gets a new Logger instance to log server messages
     * @returns {Logger}
     */
    static getServerLogger(){
        let serverLogPath = Factory.getConfig().server.log;
        return Factory.getLogger(serverLogPath, 'SERVER');
    }

    /**
     * Gets the strings data object
     * @returns {exports|*}
     */
    static getStrings(){
        return require('../strings');
    }
}
module.exports = Factory;