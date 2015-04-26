import {BusinessFactory} from '../business/factory';

/**
 * Provides an interface to the Log business logic
 * @class LogService
 */
export class LogService{

    /**
     * Gets Runtime log
     * @returns {String}
     */
    getRuntimeLog(size){
        "use strict";
        let business = BusinessFactory.getLogBusiness();
        return business.getRuntimeLog(size);
    }

    /**
     * Gets Server log
     * @returns {String}
     */
    getServerLog(size){
        "use strict";
        let business = BusinessFactory.getLogBusiness();
        return business.getServerLog(size);
    }

    /**
     * Gets DataProvider log
     * @returns {String}
     */
    getDataProviderLog(size){
        "use strict";
        let business = BusinessFactory.getLogBusiness();
        return business.getDataProviderLog(size);
    }
}