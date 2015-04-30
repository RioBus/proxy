/// <reference path="../defs/node/node.d.ts" />
import Factory = require("./common/factory");
import Logger = require("./common/logger");
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
    public static main(argv:string[]): void{
        "use strict";

        var logger:Logger = Factory.getRuntimeLogger();
        logger.info('Starting the server...');

        // Configuring the RESTful router to handle HTTP requests
        var router:Router = new Router();
        router.registerResources(Config.resources); // Registering resources to handle the URLs
        
        var environment:any = (argv.indexOf("--production")>-1)?
         Config.environment.production : Config.environment.development;
         
        router.start(environment.ip, environment.port); // Starting RESTful application
    }
}

export = Application;