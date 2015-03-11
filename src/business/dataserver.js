import {Lines} from '../domain/lines';
import {ServerData} from '../domain/serverdata';
import {Globals} from '../common/globals';
import {Factory} from '../common/factory';

export class DataServerBusiness{

    serveData(response){
        "use strict";
        var lines = new Lines();
        lines.buses = response.data || lines.buses;
        let cache = Factory.getCache();
        cache.set('lines', lines);

        var serverData = new ServerData();
        serverData.buses = response.json || serverData.buses;
        serverData.lastUpdate = response.lastUpdate || serverData.lastUpdate;
        serverData.lastStatus = response.lastStatus || serverData.lastStatus;
        cache.set('serverData', serverData);
    }
}