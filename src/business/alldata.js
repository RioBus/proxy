import {ServerData} from '../domain/serverdata';
import {Factory} from '../common/factory';
import {HttpRequest} from '../core/httprequest';

export class AllDataBusiness{

    getAllData(){
        "use strict";
        let config = Factory.getConfig().server.dataServer;

        let http = new HttpRequest();
        let options = {
            headers: {
                'Accept': '*/*',
                'Cache-Control': 'no-cache'
            },
            json: true
        };
        let requestPath = 'http://' + config.host + config.path;
        let response = http.get(requestPath, options);
        return JSON.parse(response.getBody()).DATA;
    }
}