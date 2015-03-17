import {Logger} from './logger';
import {Analytics} from './analytics';

export class Factory{

    static getConfig(){
        "use strict";
        if(!Factory.configuration){
            Factory.configuration = require('../config');
        }
        return Factory.configuration;
    }

    static getLogger(filePath=null, flag=''){
        "use strict";
        if(!filePath) filePath = Factory.getConfig().runtimeLog;
        return new Logger(filePath, flag);
    }

    static getRuntimeLogger(){
        "use strict";
        let runtimeLogPath = Factory.getConfig().runtimeLog;
        return Factory.getLogger(runtimeLogPath, 'RUNTIME');
    }

    static getServerLogger(){
        "use strict";
        let serverLogPath = Factory.getConfig().server.log;
        return Factory.getLogger(serverLogPath, 'SERVER');
    }

    static getDataProviderLogger(){
        "use strict";
        let providerLogPath = Factory.getConfig().server.dataProvider.log;
        return Factory.getLogger(providerLogPath, 'DATA PROVIDER');
    }

    static getAnalytics(){
        "use strict";
        if(!Factory.analytics){
            let config = Factory.getConfig().analytics;
            Factory.analytics = new Analytics(config.ua, config.host);
        }
        return Factory.analytics;
    }

    static getStrings(){
        "use strict";
        if(!Factory.strings){
            Factory.strings = require('../strings');
        }
        return Factory.strings;
    }
}