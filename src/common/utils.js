import {Logger} from './logger';

export class Utils{

    static getConfig(){
        "use strict";
        return require('../config');
    }

    static getLogger(filePath=null, flag=''){
        "use strict";
        if(!filePath) filePath = Utils.getConfig().log;
        return new Logger(filePath, flag);
    }

    static getRuntimeLogger(){
        "use strict";
        let runtimeLogPath = Utils.getConfig().log;
        return Utils.getLogger(runtimeLogPath, 'RUNTIME');
    }

    static getServerLogger(){
        "use strict";
        let serverLogPath = Utils.getConfig().server.log;
        return Utils.getLogger(serverLogPath, 'SERVER');
    }
}