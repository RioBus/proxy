import {HttpRequest} from '../core/httprequest';
import {Factory} from '../common/factory';
import {ItineraryDataAccess} from './itinerary';
import {File} from '../core/file';

let Strings = Factory.getStrings();

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
        this.blankLine = Strings.dataaccess.bus.blankLine;
        this.blankSense = Strings.dataaccess.bus.blankSense;
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

        this.logger.info(Strings.dataaccess.bus.searching+lines);
        let response = this.requestBusData(); // Gets all bus data
        let data = JSON.parse(response.data).buses;
        var busList = [];
        for(var line of lineList){
            if(Object.keys(data).indexOf(line)>=0)
                busList = busList.concat(data[line]);
        }
        this.logger.info(busList.length + Strings.dataaccess.bus.results);

        return (busList.length>0 && busList[0].line!==this.blankLine)? this.identifySense(busList) : busList;
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

        this.logger.info(Strings.dataaccess.bus.searching+codes);
        let response = this.requestBusData(); // Gets all bus data
        let data = JSON.parse(response.data);
        let buses = data.buses;
        let map = data.map;
        var busList = [];
        for(var code of codeList){
            let path = map[code];

            if(path instanceof Object){
                path.line = path.line.toString();
                path.position = parseInt(path.position);
                let bus = buses[path.line][path.position];
                if(bus.line!==this.blankLine){
                    bus = this.identifySense([bus])[0];
                }
                busList.push(bus);
            }
        }
        this.logger.info(busList.length + Strings.dataaccess.bus.results);
        return busList;
    }

    /**
     * Gets all the bus data
     * @returns {Array}
     */
    getAllLines(){
        "use strict";
        let response = this.requestBusData();
        let busList = JSON.parse(response.data);
        this.logger.info(Strings.dataaccess.bus.total + busList.length + Strings.dataaccess.bus.results);
        return busList.buses;
    }

    /**
     * Gets the sample bus data
     * @returns {Array}
     */
    getSamples(){
        "use strict";
        try{
            let dataPath = Factory.getConfig().server.dataProvider.dataPath;
            let file = new File(dataPath);
            return JSON.parse(file.read());
        } catch (e){
            return [];
        }
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

            if(!itineraries[bus.line]) return data;

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
            if(!nearest){
                bus.sense = this.blankSense;
            } else {
                let returning = !(nearest.sequential>0); // identifies if the bus is returning or not
                if(returning){
                    var description = itineraries[bus.line][0].description.toUpperCase().split(' X ');
                    var tmp = description[0];
                    description[0] = description[1];
                    description[1] = tmp;
                    bus.sense = description.join(' X ');
                } else{
                    bus.sense = itineraries[bus.line][0].description;
                }
            }
        }
        return data;
    }

    /**
     * Get the timestamp of the last update from data source
     * @returns {string}
     */
    requestLastUpdate(){
        "use strict";
        let response = this.requestBusData(); // the stored bus data list object has the timestamp
        return response.timestamp;
    }

    /**
     * Gets the data from the data storage
     * @returns {Array}
     */
    requestBusData(){
        "use strict";
        try{
            let dataPath = Factory.getConfig().server.dataProvider.dataPath;
            let file = new File(dataPath);
            return JSON.parse(file.read());
        } catch (e){
            return [];
        }
    }
}