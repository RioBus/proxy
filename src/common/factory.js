import {Logger} from './logger';

/**
 * Factory Helper
 *
 * Factories main objects to help decoupling the code
 */
export class Factory{

    /**
     * Gets the configuration data object
     * @returns {exports|*}
     */
    static getConfig(){
        "use strict";
        if(!Factory.configuration){
            Factory.configuration = require('../config');
        }
        return Factory.configuration;
    }

    /**
     * Gets a new Logger instance
     * @param filePath Log file path
     * @param flag Log flag (default: RUNTIME)
     * @returns {Logger}
     */
    static getLogger(filePath=null, flag=''){
        "use strict";
        if(!filePath) filePath = Factory.getConfig().runtimeLog;
        return new Logger(filePath, flag);
    }

    /**
     * Gets a new Logger instance to log runtime messages
     * @returns {Logger}
     */
    static getRuntimeLogger(){
        "use strict";
        let runtimeLogPath = Factory.getConfig().runtimeLog;
        return Factory.getLogger(runtimeLogPath, 'RUNTIME');
    }

    /**
     * Gets a new Logger instance to log server messages
     * @returns {Logger}
     */
    static getServerLogger(){
        "use strict";
        let serverLogPath = Factory.getConfig().server.log;
        return Factory.getLogger(serverLogPath, 'SERVER');
    }

    /**
     * Gets the strings data object
     * @returns {exports|*}
     */
    static getStrings(){
        "use strict";
        if(!Factory.strings){
            Factory.strings = require('../strings');
        }
        return Factory.strings;
    }
}