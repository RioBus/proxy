import {HttpRequest} from '../core/httprequest';
import {Factory} from '../common/factory';
import {Bus} from '../domain/bus';

export class ServerDataAccess{

    constructor(){
        "use strict";
        this.logger = Factory.getDataProviderLogger();
    }

    getAllData(){
        "use strict";
        let body = this.requestFromServer();

        if(body.type) return body;
        let data = body.DATA;
        //let columns = body.COLUMNS;
        // columns: ['DATAHORA', 'ORDEM', 'LINHA', 'LATITUDE', 'LONGITUDE', 'VELOCIDADE', 'DIRECAO']

        var dataList = [];
        for(var d of data){
            // hotfix for wrong daylight saving time and transforming DATAHORA to standard format
            //if(d[1].substr(0,1) !== 'C'){
            //    var time = new Date(d[0]);
            //    time.setHours(time.getHours()+1);
            //    d[0] = time.toLocaleString();
            //}
            let bus = new Bus(d[2],d[1],d[5],d[6],d[3],d[4],d[0]);
            dataList.push(bus);
        }

        return dataList;
    }

    storeData(data){
        "use strict";
        let dataPath = Factory.getConfig().server.dataProvider.dataPath;
        let fs = require('fs');
        data = {
            data: data,
            timestamp: (new Date).toLocaleString()
        };
        fs.writeFile(dataPath, JSON.stringify(data), function(error){
            if(error) throw error;
        });
    }

    requestFromServer(){
        "use strict";
        let config = Factory.getConfig().server.dataProvider;
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
        return this.respondRequest(response);
    }

    respondRequest(response){
        "use strict";
        switch(response.statusCode){
            case 200:
                return JSON.parse(response.getBody());
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