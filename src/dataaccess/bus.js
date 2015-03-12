import {HttpRequest} from '../core/httprequest';
import {Factory} from '../common/factory';
import {Bus} from '../domain/bus';

export class BusDataAccess{

    getByLines(lines){
        "use strict";
        let body = this.requestFromServer(lines);
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

    getAllLines(){
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

    requestFromServer(lines=''){
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
        lines = (lines.length>0)? '/'+lines : lines;
        let requestPath = 'http://' + config.host + config.path + lines;
        let response = http.get(requestPath, options);
        return JSON.parse(response.getBody());
    }
}