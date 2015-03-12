import {Factory} from '../common/factory';

export class LogDataAccess{

    constructor(){
        "use strict";
        this.logger = Factory.getLogger();
    }

    getRuntimeLog(){
        "use strict";
        let filePath = Factory.getConfig().runtimeLog;
        this.logger.info('Reading log: '+filePath);
        return this.getFromFile(filePath);
    }

    getServerLog(){
        "use strict";
        let filePath = Factory.getConfig().server.log;
        this.logger.info('Reading log: '+filePath);
        return this.getFromFile(filePath);
    }

    getFromFile(fileName){
        "use strict";
        let fs = require('fs');
        return fs.readFileSync(fileName, "utf8");
    }
}