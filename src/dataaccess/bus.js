import {HttpRequest} from '../core/httprequest';
import {Factory} from '../common/factory';
import {ItineraryDataAccess} from './itinerary';

/**
 * Bus data access layer
 *
 * Does all Bus stored data operations.
 * @class BusDataAccess
 * @constructor
 */
export class BusDataAccess{

    constructor(){
        "use strict";
        this.logger = Factory.getRuntimeLogger();
    }

    /**
     * Gets all the bus data given a line or an list of.
     * @param {String} lines
     * @returns {Array}
     */
    getByLines(lines){
        "use strict";
        let lineSearchLimit = Factory.getConfig().server.maxSearchItems;
        let lineList = lines.split(',');

        // Makes sure it won't search for more lines than the limit
        if(lineList.length>lineSearchLimit) lineList.splice(lineSearchLimit, lines.length-lineSearchLimit);

        this.logger.info('Searching for: '+lines);
        let response = this.requestBusData(); // Gets all bus data
        let busList = JSON.parse(response.data) // and filters the list
            .filter(function(bus){
                return (lineList.indexOf(bus.line.toString())>=0);
            });
        this.logger.info(busList.length + ' results.');
        return this.identifySense(busList);
    }

    /**
     * Gets all the bus data
     * @returns {Array}
     */
    getAllLines(){
        "use strict";
        let response = this.requestBusData();
        let busList = JSON.parse(response.data);
        this.logger.info('Total: ' + busList.length + ' results.');
        return busList;
    }

    identifySense(data){
        let itineraries = [];
        let dataAccess = new ItineraryDataAccess();
        for(var i=0; i<data.length; i++){
            let bus = data[i];
            if(Object.keys(itineraries).indexOf(bus.line.toString())<0){
                itineraries[bus.line] = dataAccess.getItinerary(bus.line);
            }
            bus.sense = itineraries[bus.line][0].description.split('-')[1];
        }
        return data;
    }

    /**
     * Get the timestamp of the last update from data source
     * @returns {timestamp|*|rsign.oauth.timestamp|raccsign.oauth.timestamp|rupsign.oauth.timestamp|Number}
     */
    requestLastUpdate(){
        "use strict";
        let response = this.requestBusData(); // the stored bus data list object has the timestamp
        return response.timestamp;
    }

    /**
     * Gets the data from the data storage
     * @returns {Object}
     */
    requestBusData(){
        "use strict";
        let dataPath = Factory.getConfig().server.dataProvider.dataPath;
        let fs = require('fs');
        let data = fs.readFileSync(dataPath, 'utf8');
        return JSON.parse(data);
    }
}