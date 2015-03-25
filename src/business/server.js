import {DataAccessFactory} from '../dataaccess/factory';
import {Factory} from '../common/factory';

/**
 * External server connection and data storage logics
 *
 * Does data source connected operations.
 * @class ServerBusiness
 * @constructor
 */
export class ServerBusiness{

    constructor(){
        "use strict";
        this.dataAccess = DataAccessFactory.getServerDataAccess();
    }

    /**
     * Requests the Bus data from the external data source and stores
     * in a local data storage. The operation repeat in a defined interval.
     */
    storeAllData(){
        "use strict";
        let intervalTime = Factory.getConfig().server.dataProvider.intervalTime;
        let data = this.dataAccess.getAllData(); // Get data pro external server
        if(!data.type){
            this.dataAccess.storeData(JSON.stringify(data)); // Stores the data in a local storage
        }
        let DeAsync = require('deasync');
        while(true){
            // Makes sure it won't stop
            DeAsync.sleep(intervalTime);
            DeAsync.runLoopOnce();
        }
    }
}