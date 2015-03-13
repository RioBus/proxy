import {Factory} from '../common/factory';
import {ServiceFactory} from '../service/factory';

export class DataProvider{

    static main(argv){
        "use strict";
        let logPath = Factory.getConfig().server.dataServer.log;
        let logger = Factory.getLogger(logPath, 'DATA PROVIDER');
        logger.info("Started data provider");
        let service = ServiceFactory.getServerService();
        service.storeAllData();
    }
}