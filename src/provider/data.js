import {Factory} from '../common/factory';

export class DataProvider{

    static main(argv){
        "use strict";
        let logger = Factory.getLogger();
        logger.info("Started data provider");
    }
}