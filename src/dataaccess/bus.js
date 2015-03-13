import {HttpRequest} from '../core/httprequest';
import {Factory} from '../common/factory';
import {Bus} from '../domain/bus';

import {RedisClient} from '../core/redis';

export class BusDataAccess{

    getByLines(lines){
        "use strict";
        let lines = this.getAllLines();

        var busList = [];
        for(var d of data){
            let bus = new Bus(d[2],d[1],d[5],d[6],d[3],d[4],d[0]);
            busList.push(bus);
        }
        return busList;
    }

    getAllLines(){
        "use strict";
        let response = this.requestFromServer();
        let data = response.data;

        var busList = [];
        for(var d of data){
            let bus = new Bus(d[2],d[1],d[5],d[6],d[3],d[4],d[0]);
            busList.push(bus);
        }
        return busList;
    }

    requestFromServer(){
        "use strict";
        let client = new RedisClient();
        client.connect();
        return client.getObject('busData');
    }
}