import {Factory} from '../common/factory';
import {Utils} from '../common/utils';

export class RedisClient{

    constructor(port=6379, host='127.0.0.1', options={}){
        "use strict";
        this.logger = Factory.getLogger(Factory.getConfig().server.dataServer.log);
        this.driver = require('redis');
        this.port = port;
        this.host = host;
        this.options = options;
    }

    connect(){
        "use strict";
        this.logger.info('Attemping to connect to Redis server in '+this.host+':'+this.port+'...');
        this.client = this.driver.createClient(this.port, this.host, this.options);
        this.logger.info('Connected!');
    }

    disconnect(){
        "use strict";
        this.client.end();
        this.logger.info('Disconnected from Redis server.');
    }

    auth(password, callback){
        "use strict";
        this.client.auth(password, callback);
    }

    getString(key){
        "use strict";
        this.logger.info("Requesting '"+key+"' to Redis server...");
        var result = null;
        this.client.get(key, function(error, response){
            if(error) throw error;
            this.logger.info('Response: '+response);
            result = response.toString();
        });
        while(!result);
        return result;
    }

    setString(key, value){
        "use strict";
        this.logger.info("Storing string in '"+key+"'...");
        this.client.set(key, value, function(error){
            if(error) throw error;
        });
    }

    getObject(key){
        this.logger.info("Requesting '"+key+"' to Redis server...");
        var result = null;
        this.client.hmgetall(key, function(error, response){
            if(error) throw error;
            this.logger.info('Response: SUCCESS');
            console.log(response);
            result = response.toString();
        });
        while(!result);
        return result;
    }

    setObject(key, value){
        "use strict";
        this.logger.info("Storing object in '"+key+"'...");
        let obj = {
            data: {
                data: value,
                timestamp: Utils.getTimestamp()
            }
        };
        this.client.hmset(key, obj, function(error){
            if(error) throw error;
        });
    }
}