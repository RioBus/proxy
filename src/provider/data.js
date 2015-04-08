import {Factory} from '../common/factory';
import {ServiceFactory} from '../service/factory';

/**
 * DataProvider process bootstrapper
 *
 * Bootstraps the Data Provider process, which runs in background to search and store
 * the bus information given in by the DataRio webservice.
 * @class DataProvider
 */
export class DataProvider{

    /**
     * Starts the data provider routine
     *
     * @method main
     * @param {Array} argv Process arg list
     * @return {void}
     */
    static main(argv){
        "use strict";
        let logger = Factory.getDataProviderLogger();
        logger.info("Starting data provider...");

        let service = ServiceFactory.getServerService();
        service.storeAllData();
    }
}