import {AllDataBusiness} from './alldata';
import {LogBusiness} from './log';
import {SearchBusiness} from './search';

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

    static getSearchBusiness(){
        "use strict";
        return new SearchBusiness();
    }

}