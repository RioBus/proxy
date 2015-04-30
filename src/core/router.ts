/// <reference path="../../defs/express/express.d.ts" />
import Factory = require("../common/factory");
import Logger = require("../common/logger");

/**
 * Class Router represents the RESTful router, which
 * handles all the HTTP routes configured in the application.
 * @class Router
 * @constructor
 */
class Router{
    
    private logger:Logger;
    private driver:any;

    constructor(){
        var ServerDriver = require('express');
        var compression = require('compression');
        this.logger = Factory.getServerLogger();
        this.driver = new ServerDriver();
        this.driver.use(compression());
        this.driver.use(function(request, response, next) {
            response.header("Access-Control-Allow-Origin", "*");
            response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
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
        var logger = this.logger;
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

    /**
     * Registers a list of resources to handle routes
     * @param {Array} resources
     */
    registerResources(resources){
        var self = this;
        resources.forEach(function(resource){
            var moduleName = resource;
            var Resource = require('../'+moduleName);
            resource = new Resource();
            var route = resource.route;

            self.route('get', route, resource.get);
            self.route('post', route, resource.post);
            self.route('put', route, resource.put);
            self.route('delete', route, resource.delete);
            self.logger.info('Resource registered: '+moduleName);
        });
    }

    /**
     * Starts the RESTful router
     * @param {String} ip
     * @param {int} port
     * @param {Function} callback
     * @returns {http.Server}
     */
    start(ip, port, callback=null){
        var self = this;
        return this.driver.listen(port, ip, function(){
            "use strict";
            if(callback!==null) callback();
            self.logger.info('Server started in http://'+ip+':'+port);
        });
    }
}
export = Router;