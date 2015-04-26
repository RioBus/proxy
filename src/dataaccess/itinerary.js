import {HttpRequest} from '../core/httprequest';
import {Itinerary} from '../domain/itinerary';
import {Factory} from '../common/factory';
import {File} from '../core/file';

let Strings = Factory.getStrings();

/**
 * DataAccess referred to Itinerary stored data
 *
 * Does operations over Itinerary data
 * @class ItineraryDataAccess
 * @constructor
 */
export class ItineraryDataAccess{

    constructor(){
        "use strict";
        this.logger = Factory.getRuntimeLogger();
    }

    /**
     * Retrieves the Itinerary spots given a line
     * @param {String} line
     * @returns {Array}
     */
    getItinerary(line){
        let itineraryList = this.retrieveData(line);
        var data = [];
        var returning = 0;
        for(var it of itineraryList){
            if(it[3]==0 && returning==0) returning = 1;
            else if(it[3]==0 && returning==1) returning = -1;
            // Transforming the external data into an application's known
            var description = it[1].split('-');
            description.shift();
            let itinerary = new Itinerary(it[3]*returning,it[0],description.join('-'),it[2],it[4],it[5],it[6]);
            data.push(itinerary);
        }
        return data;
    }

    /**
     * Searches in the local storage for the itinerary data or request to the external server
     * case not found.
     * @param {String} line
     * @returns {*}
     */
    retrieveData(line){
        let filePath = Factory.getConfig().server.dataProvider.path.output + '/'+ line;
        this.logger.info(Strings.dataaccess.itinerary.searching+line);

        try{
            let file = new File(filePath);
            return JSON.parse(file.read());
        } catch(e){
            let data = this.requestFromServer(line);
            this.storeData(filePath, data);
            return data;
        }
    }

    /**
     * Retrieves the Itinerary data from the external server
     * @param {String} line
     * @returns {*}
     */
    requestFromServer(line){
        "use strict";
        let config = Factory.getConfig().server.dataProvider;
        let http = new HttpRequest();
        let options = {
            headers: {
                'Accept': '*/*',
                'Cache-Control': 'no-cache'
            },
            json: false
        };
        let requestPath = 'http://' + config.host + config.path.itinerary.replace("$$", line);
        this.logger.info(Strings.dataaccess.itinerary.searching+requestPath);
        let response = http.get(requestPath, options);
        return this.respondRequest(response);
    }

    /**
     * Cached locally the itinerary
     * @param {String} filePath Place to create the file and save the data
     * @param {Array} data Itinerary list to be saved
     * */
    storeData(filePath, data){
        try{
            let file = new File(filePath);
            file.write(JSON.stringify(data));
            this.logger.info(Strings.dataaccess.itinerary.stored);
        } catch(e){
            this.logger.error(e);
            throw e;
        }
    }

    /**
     * Verifies the request response status and returns the correct output
     * @param {*} response
     * @returns {Array}
     * */
    respondRequest(response){
        "use strict";
        switch(response.statusCode){ // Verifying response statusCode
            case 200:
                let body = response.getBody().toString().replace(/\r/g, "").replace(/\"/g, "").split("\n");
                body.shift(); // Removes the CSV header line with column names
                var result = [];
                for(var i=0; i<body.length; i++){ // Transforms the data array into a matrix
                    if(body[i].length>0)
                        result.push(body[i].split(','));
                }
                return result;
            case 302:
                this.logger.alert(Strings.dataaccess.all.request.e302);
                return [];
            case 404:
                this.logger.alert(Strings.dataaccess.all.request.e404);
                return [];
            case 503:
                this.logger.alert(Strings.dataaccess.all.request.e503);
                return [];
            default:
                this.logger.alert('('+response.statusCode+') '+Strings.dataaccess.all.request.default);
                return [];
        }
    }
}