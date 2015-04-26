import {Utils} from '../common/utils';
import {Factory} from '../common/factory';

let Strings = Factory.getStrings();

/**
 * Class Router represents the RESTful router, which
 * handles all the HTTP routes configured in the application.
 * @class Router
 * @constructor
 */
export class Router{

    constructor(){
        let ServerDriver = require('express');
        let compression = require('compression');
        this.logger = Factory.getServerLogger();
        this.driver = new ServerDriver();
        this.driver.use(compression());
        this.driver.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
    }

    /**
     * Schedules a route with a callback
     *
     * @param {String} method
     * @param {String} route
     * @param {Function} callback
     */
    route(method, route, callback){
        let logger = this.logger;
        switch(method){
            case 'post':
                this.driver.post(route, function(request, response, next){
                    "use strict";
                    logger.info(Strings.core.router.serving+request.url+' (POST)');
                    callback(request, response, next);
                });
                break;
            case 'put':
                this.driver.put(route, function(request, response, next){
                    "use strict";
                    logger.info(Strings.core.router.serving+request.url+' (PUT)');
                    callback(request, response, next);
                });
                break;
            case 'delete':
                this.driver.delete(route, function(request, response, next){
                    "use strict";
                    logger.info(Strings.core.router.serving+request.url+' (DELETE)');
                    callback(request, response, next);
                });
                break;
            case 'get':
            default:
                this.driver.get(route, function(request, response, next){
                    "use strict";
                    logger.info(Strings.core.router.serving+request.url+' (GET)');
                    callback(request, response, next);
                });
                break;
        }
    }

    /**
     * Registers a list of resources to handle routes
     * @param {Array} resources
     */
    registerResources(resources){
        for(var resource of resources){
            let moduleName = resource;
            let Resource = Utils.dynamicClassImport('../'+moduleName);
            resource = new Resource();
            let route = resource.route();

            this.route('get', route, resource.get);
            this.route('post', route, resource.post);
            this.route('put', route, resource.put);
            this.route('delete', route, resource.delete);
            this.logger.info(Strings.core.router.registered+moduleName);
        }
    }

    /**
     * Starts the RESTful router
     * @param {String} ip
     * @param {int} port
     * @param {Function} callback
     * @returns {http.Server}
     */
    start(ip, port, callback=null){
        let self = this;
        return this.driver.listen(port, ip, function(){
            "use strict";
            if(callback!==null) callback();
            self.logger.info(Strings.core.router.start+ip+':'+port);
        });
    }
}