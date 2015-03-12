import {Factory} from '../common/factory';
import {DataAccessFactory} from '../dataaccess/factory';

export class LogBusiness{

    prepareLogToSend(){
        "use strict";
        let dataAccess = DataAccessFactory.getLogDataAccess();
        return dataAccess.getAll();
    }
}