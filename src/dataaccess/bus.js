import {HttpRequest} from '../core/httprequest';
import {Factory} from '../common/factory';

export class BusDataAccess{

    constructor(){
        "use strict";
        this.logger = Factory.getRuntimeLogger();
    }

    getByLines(lines){
        "use strict";
        let lineSearchLimit = Factory.getConfig().server.maxSearchItems;
        lines = lines.split(',');
        if(lines.length>lineSearchLimit) lines.splice(lineSearchLimit, lines.length-lineSearchLimit);

        this.logger.info('Searching for: '+lines);
        let response = this.requestBusData();
        let busList = JSON.parse(response.data)
            .filter(function(bus){
                return (lines.indexOf(bus.line.toString())>=0);
            });
        this.logger.info(busList.length + ' results.');
        return busList;
    }

    getAllLines(){
        "use strict";
        let response = this.requestBusData();
        let busList = JSON.parse(response.data);
        this.logger.info('Total: ' + busList.length + ' results.');
        return busList;
    }

    requestLastUpdate(){
        "use strict";
        let response = this.requestBusData();
        return response.timestamp;
    }

    requestBusData(){
        "use strict";
        let dataPath = Factory.getConfig().server.dataProvider.dataPath;
        let fs = require('fs');
        let data = fs.readFileSync(dataPath, 'utf8');
        return JSON.parse(data);
    }
}