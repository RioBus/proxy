declare var require;

import Factory   = require("../common/factory");
import IResource = require("../resources/iResource");
import Logger    = require("../common/logger");
import $inject   = require("./inject");

/**
 * Class Router represents the RESTful router, which
 * handles all the HTTP routes configured in the application.
 * @class Router
 * @constructor
 */
class Router {

    private logger: Logger;
    private driver: any;

    public constructor() {
        var Middleware: any = require('express');
        var compression: any = require('compression');
        this.logger = Factory.getServerLogger();
        this.driver = new Middleware();
        this.driver.use(compression());
        this.driver.use( (request, response, next) => {
            response.header("Access-Control-Allow-Origin", "*");
            response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
    }

    /**
     * Schedules a route with a callback
     *
     * @param {string} method
     * @param {string} route
     * @param {Function} callback
     */
    private route(method: string, route: string, callback: (request: any, response: any, next: any)=>void): void {
        var logger: Logger = this.logger;
        switch (method) {
            case 'post':
                this.driver.post(route, (request, response, next) => {
                    logger.info('Serving route ' + request.url + ' (POST)');
                    callback(request, response, next);
                });
                break;
            case 'put':
                this.driver.put(route, (request, response, next) => {
                    logger.info('Serving route ' + request.url + ' (PUT)');
                    callback(request, response, next);
                });
                break;
            case 'delete':
                this.driver.delete(route, (request, response, next) => {
                    logger.info('Serving route ' + request.url + ' (DELETE)');
                    callback(request, response, next);
                });
                break;
            case 'get':
            default:
                this.driver.get(route, (request, response, next) => {
                    logger.info('Serving route ' + request.url + ' (GET)');
                    response.header('Access-Control-Allow-Origin', "http://riob.us");
                    callback(request, response, next);
                });
                break;
        }
    }

    /**
     * Registers a list of resources to handle routes
     * @param {Object} resources
     */
    public registerResources(resources: Object): void {
        var keys: string[] = Object.keys(resources);
        keys.forEach( (key) => {
            var url = resources[key];
            var resource: IResource = $inject(key);
            this.route('get', url, (request, response, next)=>{ resource.get(request, response, next); });
            this.route('post', url, (request, response, next)=>{ resource.post(request, response, next); });
            this.route('put', url, (request, response, next)=>{ resource.put(request, response, next); });
            this.route('delete', url,  (request, response, next)=>{ resource.delete(request, response, next); });
            this.logger.info('Resource registered: ' + key);
        }, this);
    }
    
    public registerRedirects(paths: Object): void {
        var keys: string[] = Object.keys(paths);
        keys.forEach( (key) => {
            var url: string = paths[key];
            this.route("get", key, (request, response, next)=>{
                var fullUrl: string = (url.indexOf("://")>-1)? url : url+request.originalUrl;
                this.logger.info("Redirecting to '" +fullUrl+"'...");
                response.redirect(fullUrl);
            });
            this.logger.info("Path redirection registered: '" + key + "' to '"+url+"'");
        }, this);
    }

    /**
     * Starts the RESTful router
     * @param {string} ip
     * @param {int} port
     * @param {Function} callback
     * @returns {void}
     */
    public start(ip: string, port: string, callback?: ()=>void): void {
        var self = this;
        this.driver.listen(port, ip, () => {
            if (callback !== undefined) callback();
            self.logger.info('Server started in http://' + ip + ':' + port);
        });
    }
}
export = Router;
