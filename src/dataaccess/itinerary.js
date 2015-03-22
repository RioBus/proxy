import {HttpRequest} from '../core/httprequest';
import {Itinerary} from '../domain/itinerary';
import {Factory} from '../common/factory';

export class ItineraryDataAccess{

    constructor(){
        "use strict";
        this.logger = Factory.getRuntimeLogger();
    }

    getItinerary(line){
        let itineraryList = this.requestFromServer(line);
        var data = [];
        for(var it of itineraryList){
            let itinerary = new Itinerary(it[3],it[0],it[1],it[2],it[4],it[5],it[6]);
            data.push(itinerary);
        }
        return data;
    }

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

    respondRequest(response){
        "use strict";
        switch(response.statusCode){
            case 200:
                let body = response.getBody().toString().replace(/\r/g, "").replace(/\"/g, "").split("\n");
                body.shift();
                var result = [];
                for(var i=0; i<body.length; i++){
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