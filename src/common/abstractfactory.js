import {Logger} from './logger';

export class AbstractFactory{

    get logger(){
        "use strict";
        let loggerConfig = require('../config').logger;
        return new Logger(loggerConfig.consoleConfig, loggerConfig.fileConfig, loggerConfig.driver);
    }
}