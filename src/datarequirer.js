import {Logger} from './common/logger';
import {Utils} from './common/utils';
import {AbstractFactory} from './common/abstractfactory';
import {DataRetrieverService} from './service/dataretriever';

export class DataRequirer{

    static main(){
        "use strict";
        let logger = AbstractFactory.logger;
        let config = require('./config').server;

        logger.setEvent('error', DataRequirer.errorEvent);
        var lastStatus = {
            label: null,
            counter: 0
        }

        let retriever = new DataRetrieverService();
        retriever.retrieveData(lastStatus, logger, config.dataServer);
    }

    static errorEvent(e){
        "use strict";
        console.log(e);
    }
}