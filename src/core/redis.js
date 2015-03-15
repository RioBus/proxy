import {Factory} from '../common/factory';
import {Utils} from '../common/utils';

let DeAsync = require('deasync');

export class RedisClient{

    constructor(port=6379, host='127.0.0.1', options={}){
        "use strict";
        this.logger = Factory.getDataProviderLogger();
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
        var result;
        this.client.get(key, function(error, response){
            if(error) throw error;
            this.logger.info('Response: SUCCESS');
            result = response.toString();
        });
        while(!result) DeAsync.runLoopOnce();
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
        var result;
        var self = this;
        this.client.hgetall(key, function(error, response){
            if(error) throw error;
            self.logger.info('Response: SUCCESS');
            result = response;
        });
        while(!result) DeAsync.runLoopOnce();
        return result;
    }

    setObject(key, value){
        "use strict";
        this.logger.info("Storing object in '"+key+"'...");
        let obj = {
            data: value,
            timestamp: Utils.getTimestamp()
        };
        this.client.hmset(key, obj, function(error){
            if(error) throw error;
        });
    }
}