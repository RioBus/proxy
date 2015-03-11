import {Logger} from './logger';
import {LogStream} from './logstream';
import {Analytics} from './analytics';

export class Factory{

    static getConfig(){
        "use strict";
        if(!Factory.configuration){
            Factory.configuration = require('../config');
        }
        return Factory.configuration;
    }

    static getLogger(){
        "use strict";
        let loggerConfig = Factory.getConfig().logger;
        return new Logger(loggerConfig.consoleConfig, loggerConfig.fileConfig);
    }

    static getLogStream(){
        "use strict";
        return new LogStream(Factory.getConfig().server.numberOfLastLogLines);
    }

    static getAnalytics(){
        "use strict";
        let config = Factory.getConfig().analytics;
        return new Analytics(config.ua, config.host);
    }

    static getStrings(){
        "use strict";
        return require('../strings');
    }

    static getCache(){
        "use strict";
        return Factory.getConfig().cache;
    }
}