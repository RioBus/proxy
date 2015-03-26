import {BusinessFactory} from '../business/factory';

/**
 * Provides an interface to the Log business logic
 * @class LogService
 */
export class LogService{

    /**
     * Gets Runtime log
     * @returns {Array}
     */
    getRuntimeLog(){
        "use strict";
        let business = BusinessFactory.getLogBusiness();
        return business.getRuntimeLog();
    }

    /**
     * Gets Server log
     * @returns {Array}
     */
    getServerLog(){
        "use strict";
        let business = BusinessFactory.getLogBusiness();
        return business.getServerLog();
    }

    /**
     * Gets DataProvider log
     * @returns {Array}
     */
    getDataProviderLog(){
        "use strict";
        let business = BusinessFactory.getLogBusiness();
        return business.getDataProviderLog();
    }
}