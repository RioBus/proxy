import {Factory} from '../common/factory';
import {File} from '../core/file';

let Strings = Factory.getStrings();
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
    getRuntimeLog(size){
        "use strict";
        return this.getFromFile(Factory.getConfig().runtimeLog, size);
    }

    /**
     * Retrieves the Server log data from the storage
     * @returns {Array}
     */
    getServerLog(size){
        "use strict";
        return this.getFromFile(Factory.getConfig().server.log, size);
    }

    /**
     * Retrieves the DataProvider log data from the storage
     * @returns {Array}
     */
    getDataProviderLog(size){
        "use strict";
        return this.getFromFile(Factory.getConfig().server.dataProvider.log, size);
    }

    /**
     * Helper method to access the storage and retrieve the data
     * @returns {Array}
     */
    getFromFile(fileName, size=null){
        "use strict";
        this.logger.info(Strings.dataaccess.log.reading+fileName);
        this.logger.info(Strings.dataaccess.log.totalLines+size);
        try{
            let file = new File(fileName);
            return file.read().split('\n').filter(function(n){ return n != "" }).reverse().slice(0, size);
        } catch(e){
            this.logger.error(e);
            return e;
        }
    }
}