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
     * Gets all the bus data given a line or a list of.
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
     * Gets all the bus data given a code or a list of.
     * @param {String} codes
     * @returns {Array}
     */
    getByCode(codes){
        "use strict";
        let codeSearchLimit = Factory.getConfig().server.maxSearchItems;
        let codeList = codes.split(',');

        // Makes sure it won't search for more lines than the limit
        if(codeList.length>codeSearchLimit) codeList.splice(codeSearchLimit, codes.length-codeSearchLimit);

        this.logger.info('Searching for: '+codes);
        let response = this.requestBusData(); // Gets all bus data
        let busList = JSON.parse(response.data) // and filters the list
            .filter(function(bus){
                return (codeList.indexOf(bus.order.toString())>=0);
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

    /**
     * Identifies each bus sense and updates the list
     * @returns {Array}
     */
    identifySense(data){
        let itineraries = [];
        let dataAccess = new ItineraryDataAccess();
        for(var i=0; i<data.length; i++){
            let bus = data[i];
            // Only requests the itinerary if not cached
            if(Object.keys(itineraries).indexOf(bus.line.toString())<0){
                itineraries[bus.line] = dataAccess.getItinerary(bus.line);
            }
            var nearest = null;
            for(var itinerary of itineraries[bus.line]){
                if(!nearest) nearest = itinerary;
                else{
                    var nearestDistanceLat = Math.abs(bus.latitude - nearest.latitude);
                    var nearestDistanceLng = Math.abs(bus.longitude - nearest.longitude);
                    var distanceLat = Math.abs(bus.latitude - itinerary.latitude);
                    var distanceLng = Math.abs(bus.longitude - itinerary.longitude);
                    // Compares the last nearest selected spot latitude and longitude difference with the bus
                    // and changes the reference case the current itinerary spot is nearest
                    if(nearestDistanceLat > distanceLat && nearestDistanceLng > distanceLng){
                        nearest = itinerary;
                    }
                }
            }
            bus.returning = (nearest.sequential>0)? false:true; // identifies if the bus is returning or not
            if(bus.returning){
                var description = itineraries[bus.line][0].description.toUpperCase().split(' X ');
                var tmp = description[0];
                description[0] = description[1];
                description[1] = tmp;
                bus.sense = description.join(' X ');
            } else{
                bus.sense = itineraries[bus.line][0].description;
            }
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