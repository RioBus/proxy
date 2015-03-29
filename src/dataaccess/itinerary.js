import {HttpRequest} from '../core/httprequest';
import {Itinerary} from '../domain/itinerary';
import {Factory} from '../common/factory';

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
     * @returns {*}
     */
    getItinerary(line){
        let itineraryList = this.requestFromServer(line);
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
        this.logger.info("Requesting to: "+requestPath);
        let response = http.get(requestPath, options);
        return this.respondRequest(response);
    }

    /**
     * Verifies the request response status and returns the correct output
     * @param {*} response
     * @returns {*}
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
                this.logger('(302) Server moved temporarily.');
                return {type: 'error', code: response.statusCode};
            case 404:
                this.logger('(404) Not found.');
                return {type: 'error', code: response.statusCode};
            case 503:
                this.logger('(503) Server unavailable.');
                return {type: 'error', code: response.statusCode};
            default:
                this.logger('('+response.statusCode+') An error ocurred.');
                return {type: 'error', code: response.statusCode};
        }
    }
}