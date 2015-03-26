import {Factory} from '../common/factory';

/**
 * DataAccess referred to the Logs
 * @class LogDataAccess
 * @constructor
 */
export class LogDataAccess{

    constructor(){
        "use strict";
        this.logger = Factory.getRuntimeLogger();
    }

    /**
     * Retrieves the Runtime log data from the storage
     * @returns {Array}
     */
    getRuntimeLog(){
        "use strict";
        let filePath = Factory.getConfig().runtimeLog;
        this.logger.info('Reading log: '+filePath);
        return this.getFromFile(filePath);
    }

    /**
     * Retrieves the Server log data from the storage
     * @returns {Array}
     */
    getServerLog(){
        "use strict";
        let filePath = Factory.getConfig().server.log;
        this.logger.info('Reading log: '+filePath);
        return this.getFromFile(filePath);
    }

    /**
     * Retrieves the DataProvider log data from the storage
     * @returns {Array}
     */
    getDataProviderLog(){
        "use strict";
        let filePath = Factory.getConfig().server.dataServer.log;
        this.logger.info('Reading log: '+filePath);
        return this.getFromFile(filePath);
    }

    /**
     * Helper method to access the storage and retrieve the data
     * @returns {Array}
     */
    getFromFile(fileName){
        "use strict";
        let fs = require('fs');
        return fs.readFileSync(fileName, "utf8");
    }
}