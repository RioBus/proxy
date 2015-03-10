import {BusinessFactory} from '../business/businessfactory';

export class DataServerService{

    serveData(dataServer){
        "use strict";
        let business = new BusinessFactory.getDataServerBusiness();
        dataServer.on('message', business.serveData);
    }
}