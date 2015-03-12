import {Utils} from '../common/utils';

export class DataRetrieverBusiness{

    constructor(config, logger){
        "use strict";
        this.config = config;
        this.logger = logger;
        this.http = require('http');
        this.pid = null;
    }

    get options(){
        "use strict";
        return {
            host: this.config.host,
            path: this.config.path,
            agent: false,
            headers: {
                'Accept-Encoding': 'gzip',
                Accept: 'application/json'
            }
        };
    }

    retrieveData(status){
        "use strict";
        this.status = status;
        let requestProcess = this.http.get(this.options, this.requestFromServer);
        let self = this;

        requestProcess.setTimeout(this.config.timeout, function(){
            self.updateStatus('warn', 'Our REQUEST has timed out.', 'timeout');
            requestProcess.abort();
        });
        requestProcess.on('error', this.respondToError);
    }

    updateStatus(level, message, label, sendFlag=true){
        "use strict";
        if (this.status.label !== label) {
            this.status.counter = 1;
            this.status.label = label;
            this.logger.log(level, message);
        } else this.status.counter++;
        if (sendFlag) process.send({lastStatus: this.status});
    }

    respondToError(e){
        "use strict";
        if(this.status.label!=='timeout'){
            var message = '';
            switch(e.code){
                case 'ENOTFOUND':
                    message = "We couldn't find dadosabertos address, code: " + e.code;
                    break;
                case 'ECONNRESET':
                    message = "Dadosabertos server closed the connection on us, code: " + e.code;
                    break;
                case 'ECONNREFUSED':
                    message = "Dadosabertos server is off, code: " + e.code;
                    break;
                default:
                    message = 'Our REQUEST has had this error: ' + e.message + " - " + e.code;
                    break;
            }
            this.updateStatus('warn', message, e.code);
        }
        this.pid = setTimeout(this.retrieveData, this.config.intervalTime);

    }

    requestFromServer(response){
        "use strict";
        response.on('error', function(e){
            this.updateStatus('warn', "We've had this error on dadosabertos RESPONSE: " + err, err.message);
        });
        this.pid = setTimeout(this.retrieveData, this.config.intervalTime);

        switch(response.statusCode){
            case 200:
                this.forwardData(response);
                break;
            case 503:
                this.updateStatus('warn',"Dadosabertos server was unavailable, code: " + response.statusCode, response.statusCode)
                break;
            case 404:
                this.updateStatus('warn', "Dadosabertos server could not find anything matching the url, code: " + response.statusCode, response.statusCode);
                break;
            case 302:
                this.updateStatus('warn', "Dadosabertos wants us to redirect our request to a new url, code: " + response.statusCode, response.statusCode);
                break;
            default:
                this.updateStatus('warn', "Dadosabertos responded with statuscode: " + response.statusCode, response.statusCode);
                break;
        }
    }

    forwardData(response){
        "use strict";
        //var output = response;
        //if(response.headers['content-encoding']==='gzip'){
        let gzip = require('zlib').createGunzip();
        response.pipe(gzip);
        let output = gzip;
        //}

        let serverResponse = {};
        let self = this;

        output.on('data', function(chunk){
            "use strict";
            serverResponse += chunk.toString('utf-8');
        });

        output.on('end', function(){
            "use strict";
            serverResponse = self.retrieveJson(serverResponse);
            if(serverResponse!==null){
                self.updateStatus('info', "Dadosabertos is fine. We have just got some data, code: " + response.statusCode, 'success', false);
                var busData = {};
                for(var d of serverResponse.DATA){
                    var bus = d;
                    var key = "" + bus[2];

                    var time = new Date(bus[0]);
                    if (bus[1].substr(0,1)!=='C') time.setHours(time.getHours()+1);
                    bus[0] = time.toLocaleString();

                    if(data[key]) data[key].push(bus);
                    else data[key] = [bus];

                    busData[bus[1]] = [bus];
                }
                process.send({data: busData, json: serverResponse, lastUpdate: Utils.getTimestamp(), lastStatus: self.status});
            }
        });
    }

    retrieveJson(response){
        "use strict";
        try{
            response = JSON.parse(response);
            if(response['COLUMNS'][0]==='MENSAGEM'){
                response = null;
                obj.updateStatus('info', "Dadosabertos said: " + response['DATA'][0][0], 'only message');
            }
            return response;

        } catch(e){
            if(e instanceof SyntaxError){
                obj.updateStatus('warn', "We've had a syntax error while parsing json file from dadosabertos", 'bad json');
            } else {
                obj.logger.error(e.stack);
            }
        }
    }

}