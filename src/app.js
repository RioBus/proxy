'use strict';
const Config  = require('./config');
const Factory = require('./common/factory');
const Router  = require('./core/router');

(function main(){

    let logger = Factory.getRuntimeLogger();
    logger.info('Starting the server...');

    // Configuring the RESTful router to handle HTTP requests
    let router = new Router();
    router.registerResources(Config.resources); // Registering resources to handle the URLs
    let server = Config.server;
    router.start(server.ip, server.port); // Starting RESTful application
})();