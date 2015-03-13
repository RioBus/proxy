import {HttpRequest} from '../core/httprequest';
import {Factory} from '../common/factory';
import {Bus} from '../domain/bus';

import {RedisClient} from '../core/redis';

export class BusDataAccess{

    constructor(){
        "use strict";
        this.logger = Factory.getLogger();
    }

    getByLines(lines){
        "use strict";
        let response = this.requestFromServer();
        let data = JSON.parse(response.data);
        lines = lines.split(',');

        var busList = [];

        this.logger.info('Searching for: '+lines);
        for(var d of data){
            if(lines.indexOf(d.line.toString())<0) continue;
            let bus = new Bus(d.line,d.order,d.speed,d.direction,d.latitude,d.longitude,d.timestamp);
            busList.push(bus);
        }
        this.logger.info(busList.length + ' results.');
        return busList;
    }

    getAllLines(){
        "use strict";
        let response = this.requestFromServer();
        let data = JSON.parse(response.data);
        this.logger.info('Total: ' + data.length + ' results.');

        var busList = [];
        for(var d of data){
            let bus = new Bus(d.line,d.order,d.speed,d.direction,d.latitude,d.longitude,d.timestamp);
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