import {BusinessFactory} from '../business/factory';

export class LogService{

    getRuntimeLog(){
        "use strict";
        let business = BusinessFactory.getLogBusiness();
        return business.getRuntimeLog();
    }

    getServerLog(){
        "use strict";
        let business = BusinessFactory.getLogBusiness();
        return business.getServerLog();
    }

    getDataProviderLog(){
        "use strict";
        let business = BusinessFactory.getLogBusiness();
        return business.getDataProviderLog();
    }
}