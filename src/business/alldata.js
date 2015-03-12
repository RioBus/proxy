import {DataAccessFactory} from '../dataaccess/factory';

export class AllDataBusiness{

    getAllData(){
        "use strict";
        let dataAccess = DataAccessFactory.getBusDataAccess();
        let allLines = dataAccess.getAllLines();
        return allLines;
    }
}