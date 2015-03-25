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
     * @returns {*}
     */
    getRuntimeLog(){
        "use strict";
        let dataAccess = DataAccessFactory.getLogDataAccess();
        return dataAccess.getRuntimeLog();
    }

    /**
     * Returns the server logs
     * @returns {*}
     */
    getServerLog(){
        "use strict";
        let dataAccess = DataAccessFactory.getLogDataAccess();
        return dataAccess.getServerLog();
    }

    /**
     * Returns the DataProvider logs
     * @returns {*}
     */
    getDataProviderLog(){
        "use strict";
        let dataAccess = DataAccessFactory.getLogDataAccess();
        return dataAccess.getDataProviderLog();
    }
}