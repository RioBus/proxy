/// <reference path="../../defs/tsd.d.ts" />
import Logger = require("./logger");
import Config = require("../config");

/**
 * Factory Helper
 *
 * Factories main objects to help decoupling the code
 */
class Factory {

    /**
     * Gets a new Logger instance
     * @param filePath Log file path
     * @param flag Log flag (default: RUNTIME)
     * @returns {Logger}
     */
    public static getLogger(filePath?: string, flag?: string): Logger {
        "use strict";
        if (!filePath) filePath = Config.log.runtime;
        if (!flag) flag = "";
        return new Logger(filePath, flag);
    }

    /**
     * Gets a new Logger instance to log runtime messages
     * @returns {Logger}
     */
    public static getRuntimeLogger(): Logger {
        "use strict";
        var runtimeLogPath: string = Config.log.runtime;
        return Factory.getLogger(runtimeLogPath, 'RUNTIME');
    }

    /**
     * Gets a new Logger instance to log server messages
     * @returns {Logger}
     */
    public static getServerLogger(): Logger {
        "use strict";
        var serverLogPath: string = Config.log.server;
        return Factory.getLogger(serverLogPath, 'SERVER');
    }
}
export = Factory;