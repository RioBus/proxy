import {HttpRequest} from '../core/httprequest';
import {Factory} from '../common/factory';

import {RedisClient} from '../core/redis';

export class BusDataAccess{

    constructor(){
        "use strict";
        this.logger = Factory.getLogger();
    }

    getByLines(lines){
        "use strict";
        let lineSearchLimit = Factory.getConfig().server.maxSearchItems;
        lines = lines.split(',');
        if(lines.length>lineSearchLimit) lines.splice(lineSearchLimit, lines.length-lineSearchLimit);

        this.logger.info('Searching for: '+lines);
        let response = this.requestFromServer();
        let busList = JSON.parse(response.data)
            .filter(function(bus){
                return (lines.indexOf(bus.line.toString())>=0);
            });
        this.logger.info(busList.length + ' results.');
        return busList;
    }

    getAllLines(){
        "use strict";
        let response = this.requestFromServer();
        let busList = JSON.parse(response.data);
        this.logger.info('Total: ' + busList.length + ' results.');
        return busList;
    }

    requestFromServer(){
        "use strict";
        let client = new RedisClient();
        client.connect();
        return client.getObject('busData');
    }
}