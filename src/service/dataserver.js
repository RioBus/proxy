import {DataServerBusiness} from '../business/dataserver';

export class DataServerService{

    serveData(dataServer){
        "use strict";
        let business = new DataServerBusiness();
        dataServer.on('message', business.serveData);
    }
}