import {ServerData} from '../domain/serverdata';
import {Factory} from '../common/factory';

export class AllDataBusiness{

    getAllData(message){
        "use strict";
        console.log("Entrei no getAllData");
        let serverData = Factory.getCache().get('serverData');
        console.log(serverData);
        return {
            buses: ServerData.buses,
            lastUpdate: ServerData.lastUpdate,
            lastStatus: ServerData.lastStatus
        };
    }
}