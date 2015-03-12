import {BusDataAccess} from './bus';

export class DataAccessFactory{

    static getBusDataAccess(){
        "use strict";
        return new BusDataAccess();
    }
}