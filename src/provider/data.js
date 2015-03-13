import {Factory} from '../common/factory';
import {ServiceFactory} from '../service/factory';

export class DataProvider{

    static main(argv){
        "use strict";
        let logger = Factory.getLogger();
        logger.info("Started data provider");
        let service = ServiceFactory.getServerService();
        service.storeAllData();
    }
}