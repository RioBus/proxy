import {Nodelicious} from '../core/nodelicious';
import {Utils} from '../common/utils';

export class Router{

    constructor(){
        let ServerDriver = require('express');
        let compression = require('compression');
        this.driver = new ServerDriver();
        this.driver.use(compression());
        this.logger = Utils.getServerLogger();
    }

    route(method, route, callback){
        let logger = this.logger;
        switch(method){
            case 'post':
                this.driver.post(route, function(request, response, next){
                    "use strict";
                    logger.info('Serving route '+request.url+' (POST)');
                    callback(request, response, next);
                });
                break;
            case 'put':
                this.driver.put(route, function(request, response, next){
                    "use strict";
                    logger.info('Serving route '+request.url+' (PUT)');
                    callback(request, response, next);
                });
                break;
            case 'delete':
                this.driver.delete(route, function(request, response, next){
                    "use strict";
                    logger.info('Serving route '+request.url+' (DELETE)');
                    callback(request, response, next);
                });
                break;
            case 'get':
            default:
                this.driver.get(route, function(request, response, next){
                    "use strict";
                    logger.info('Serving route '+request.url+' (GET)');
                    callback(request, response, next);
                });
                break;
        }
    }

    registerResources(resources){
        for(var resource of resources){
            let moduleName = resource;
            let Resource = Nodelicious.dynamicClassImport('../'+moduleName);
            resource = new Resource();
            let route = resource.route();

            this.route('get', route, resource.get);
            this.route('post', route, resource.post);
            this.route('put', route, resource.put);
            this.route('delete', route, resource.delete);
            this.logger.info('Resource registered: '+moduleName);
        }
    }

    start(ip, port, callback=null){
        let self = this;
        return this.driver.listen(port, ip, function(){
            "use strict";
            if(callback!==null) callback();
            self.logger.info('Server started in http://'+ip+':'+port);
        });
    }
}