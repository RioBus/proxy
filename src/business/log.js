import {Factory} from '../common/factory';
import {DataAccessFactory} from '../dataaccess/factory';

/**
 * Log interface logics to do operations over the logs.
 *
 * @class LogBusiness
 */
export class LogBusiness{

    /**
     * Returns the runtime logs
     * @returns {String}
     */
    getRuntimeLog(size){
        "use strict";
        let dataAccess = DataAccessFactory.getLogDataAccess();
        return dataAccess.getRuntimeLog(size).join('\n');
    }

    /**
     * Returns the server logs
     * @returns {String}
     */
    getServerLog(size){
        "use strict";
        let dataAccess = DataAccessFactory.getLogDataAccess();
        return dataAccess.getServerLog(size).join('\n');
    }

    /**
     * Returns the DataProvider logs
     * @returns {String}
     */
    getDataProviderLog(size){
        "use strict";
        let dataAccess = DataAccessFactory.getLogDataAccess();
        return dataAccess.getDataProviderLog(size).join('\n');
    }
}