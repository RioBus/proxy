import {Factory} from '../common/factory';
import {DataAccessFactory} from '../dataaccess/factory';

export class LogBusiness{

    getRuntimeLog(){
        "use strict";
        let dataAccess = DataAccessFactory.getLogDataAccess();
        return dataAccess.getRuntimeLog();
    }

    getServerLog(){
        "use strict";
        let dataAccess = DataAccessFactory.getLogDataAccess();
        return dataAccess.getServerLog();
    }
}