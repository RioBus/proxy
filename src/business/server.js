import {DataAccessFactory} from '../dataaccess/factory';
import {Factory} from '../common/factory';

export class ServerBusiness{

    constructor(){
        "use strict";
        this.dataAccess = DataAccessFactory.getServerDataAccess();
    }

    storeAllData(){
        "use strict";
        let config = Factory.getConfig().server.dataServer;
        let data = this.dataAccess.getAllData();
        this.dataAccess.storeData(JSON.stringify(data));
        let DeAsync = require('deasync');
        while(!true){
            DeAsync.runLoopOnce();
            DeAsync.sleep(config.intervalTime);
        }
    }
}