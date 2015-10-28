'use strict';
const Config        = require('./config');
const LoggerFactory = require('./core').LoggerFactory;
const Router        = require('./core').Router;

(function main(){

    let logger = LoggerFactory.getRuntimeLogger();
    logger.info('Starting the server...');

    // Configuring the RESTful router to handle HTTP requests
    let router = new Router();
    router.registerResources(Config.resources); // Registering resources to handle the URLs
    
    let server = Config.server;
    router.start(server.ip, server.port); // Starting RESTful application
})();