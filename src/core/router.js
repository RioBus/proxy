'use strict';
var Factory = require('../common/factory');

/**
 * Class Router represents the RESTful router, which
 * handles all the HTTP routes configured in the application.
 * @class Router
 * @constructor
 */
class Router{

    constructor(){
        let ServerDriver = require('express');
        let compression = require('compression');
        this.logger = Factory.getServerLogger();
        this.driver = new ServerDriver();
        this.driver.use(compression());
        this.driver.use(function(req, res, next) {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
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
                    logger.info('Serving route '+request.url+' (POST)');
                    callback(request, response, next);
                });
                break;
            case 'put':
                this.driver.put(route, function(request, response, next){
                    logger.info('Serving route '+request.url+' (PUT)');
                    callback(request, response, next);
                });
                break;
            case 'delete':
                this.driver.delete(route, function(request, response, next){
                    logger.info('Serving route '+request.url+' (DELETE)');
                    callback(request, response, next);
                });
                break;
            case 'get':
            default:
                this.driver.get(route, function(request, response, next){
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
        for(var resource of resources){
            let moduleName = resource;
            let Resource = require('../'+moduleName);
            resource = new Resource();
            let route = resource.route();

            this.route('get', route, function(request, response, next){
                resource.get(request, response, next);
            });
            this.route('post', route, function(request, response, next){
                resource.post(request, response, next);
            });
            this.route('put', route, function(request, response, next){
                resource.put(request, response, next);
            });
            this.route('delete', route, function(request, response, next){
                resource.delete(request, response, next);
            });
            this.logger.info('Resource registered: '+moduleName);
        }
    }

    /**
     * Starts the RESTful router
     * @param {String} ip
     * @param {number} port
     * @param {Function} callback
     * @returns {void}
     */
    start(ip, port, callback){
        let self = this;
        this.driver.listen(port, ip, function(){
            if(callback) callback();
            self.logger.info('Server started in http://'+ip+':'+port);
        });
    }
}
module.exports = Router;