'use strict';
const Logger = require('./logger');
const Config = require('../config');

/**
 * Factory Helper
 *
 * Factories main objects to help decoupling the code
 */
class Factory {

    /**
     * Gets a new Logger instance
     * @param {string} filePath - Log file path
     * @param {string} flag - Log flag (default: RUNTIME)
     * @returns {Logger}
     */
    static getLogger(filePath, flag) {
        if(!filePath) filePath = Config.logs.runtime;
        if(!flag) flag = '';
        return new Logger(filePath, flag);
    }

    /**
     * Gets a new Logger instance to log runtime messages
     * @returns {Logger}
     */
    static getRuntimeLogger() {
        let runtimeLogPath = Config.logs.runtime;
        return Factory.getLogger(runtimeLogPath, 'RUNTIME');
    }

    /**
     * Gets a new Logger instance to log server messages
     * @returns {Logger}
     */
    static getServerLogger() {
        let serverLogPath = Config.logs.server;
        return Factory.getLogger(serverLogPath, 'SERVER');
    }
}
module.exports = Factory;