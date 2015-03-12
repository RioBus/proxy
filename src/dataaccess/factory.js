import {BusDataAccess} from './bus';
import {LogDataAccess} from './log';

export class DataAccessFactory{

    static getBusDataAccess(){
        "use strict";
        return new BusDataAccess();
    }

    static getLogDataAccess(){
        "use strict";
        return new LogDataAccess();
    }
}