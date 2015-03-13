import {HttpRequest} from '../core/httprequest';
import {RedisClient} from '../core/redis';
import {Factory} from '../common/factory';
import {Bus} from '../domain/bus';

export class ServerDataAccess{

    getAllData(){
        "use strict";
        let body = this.requestFromServer();
        let data = body.DATA;
        let columns = body.COLUMNS;
        // columns: ['DATAHORA', 'ORDEM', 'LINHA', 'LATITUDE', 'LONGITUDE', 'VELOCIDADE', 'DIRECAO']

        var busList = [];
        for(var d of data){
            let bus = new Bus(d[2],d[1],d[5],d[6],d[3],d[4],d[0]);
            busList.push(bus);
        }
        return busList;
    }

    storeData(data){
        "use strict";
        let client = new RedisClient();
        client.connect();
        client.setObject('busData', data);
    }

    requestFromServer(){
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
        return JSON.parse(response.getBody());
    }
}