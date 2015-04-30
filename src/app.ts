/// <reference path="../defs/node/node.d.ts" />
import Factory = require("./common/factory");
import Router = require("./core/router");
import Config = require("./config");

/**
 * Main application process.
 * @class App
 */
class Application{

    /**
     * Init application
     *
     * @method main
     * @param {Array} argv Process arg list
     * @return {void}
     */
    static main(argv){
        "use strict";

        var logger = Factory.getRuntimeLogger();
        logger.info('Starting the server...');

        // Configuring the RESTful router to handle HTTP requests
        var router = new Router();
        router.registerResources(Config.resources); // Registering resources to handle the URLs
        var environment = Config.environment.development;
        router.start(environment.ip, environment.port); // Starting RESTful application
    }
}

export = Application;