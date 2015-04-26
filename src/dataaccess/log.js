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
    getRuntimeLog(){
        "use strict";
        return this.getFromFile(Factory.getConfig().runtimeLog);
    }

    /**
     * Retrieves the Server log data from the storage
     * @returns {Array}
     */
    getServerLog(){
        "use strict";
        return this.getFromFile(Factory.getConfig().server.log);
    }

    /**
     * Retrieves the DataProvider log data from the storage
     * @returns {Array}
     */
    getDataProviderLog(){
        "use strict";
        return this.getFromFile(Factory.getConfig().server.dataProvider.log);
    }

    /**
     * Helper method to access the storage and retrieve the data
     * @returns {Array}
     */
    getFromFile(fileName){
        "use strict";
        this.logger.info(Strings.dataaccess.log.reading+fileName);
        try{
            let file = new File(fileName);
            return file.read();
        } catch(e){
            this.logger.error(e);
            return e;
        }
    }
}