import {BusinessFactory} from '../business/factory';

export class DataServerService{

    serveData(dataServer){
        "use strict";
        let business = new BusinessFactory.getDataServerBusiness();
        dataServer.on('message', business.serveData);
    }
}