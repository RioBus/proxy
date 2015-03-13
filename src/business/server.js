import {DataAccessFactory} from '../dataaccess/factory';
import {Factory} from '../common/factory';

export class ServerBusiness{

    storeAllData(){
        "use strict";
        let config = Factory.getConfig().server.dataServer;
        let dataAccess = DataAccessFactory.getServerDataAccess();
        let data = dataAccess.getAllData();
        dataAccess.storeData(JSON.stringify(data));
        setTimeout(this.storeAllData, config.intervalTime);
    }
}