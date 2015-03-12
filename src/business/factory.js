import {AllDataBusiness} from './alldata';
import {DataRetrieverBusiness} from './dataretriever';
import {DataServerBusiness} from './dataserver';
import {LogBusiness} from './log';
import {MainBusiness} from './main';

import {Factory} from '../common/factory';

export class BusinessFactory{

    static getAllDataBusiness(){
        "use strict";
        return new AllDataBusiness();
    }

    static getDataRetrieverBusiness(){
        "use strict";
        let config = Factory.getConfig();
        let logger = Factory.getLogger();
        return new DataRetrieverBusiness(config, logger);
    }

    static getDataServerBusiness(){
        "use strict";
        return new DataServerBusiness();
    }

    static getLogBusiness(){
        "use strict";
        return new LogBusiness();
    }

    static getMainBusiness(){
        "use strict";
        return new MainBusiness();
    }

}