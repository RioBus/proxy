import {BusDataAccess} from './bus';
import {LogDataAccess} from './log';
import {ServerDataAccess} from './server';

export class DataAccessFactory{

    static getBusDataAccess(){
        "use strict";
        return new BusDataAccess();
    }

    static getLogDataAccess(){
        "use strict";
        return new LogDataAccess();
    }

    static getServerDataAccess(){
        "use strict";
        return new ServerDataAccess();
    }
}