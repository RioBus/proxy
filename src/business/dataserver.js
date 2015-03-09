import {Lines} from '../domain/lines';
import {ServerData} from '../domain/serverdata';

export class DataServerBusiness{

    serveData(response){
        "use strict";
        Lines.buses = response.data || Lines.buses;
        ServerData.buses = response.json || ServerData.buses;
        ServerData.lastUpdate = response.lastUpdate || ServerData.lastUpdate;
        ServerData.lastStatus = response.lastStatus || ServerData.lastStatus;
    }
}