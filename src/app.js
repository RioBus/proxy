import {Factory} from './common/factory';
import {Router} from './core/router';
import {Server} from './core/server';

/**
 * Main application process.
 * @class App
 */
export class App{

    /**
     * Init application
     *
     * @method main
     * @param {Array} argv Process arg list
     * @return {void}
     */
    static main(argv){
        "use strict";
        let config = Factory.getConfig();

        let logger = Factory.getRuntimeLogger();
        logger.info('Starting the server...');

        // Configuring the RESTful router to handle HTTP requests
        let router = new Router();
        router.registerResources(config.resources); // Registering resources to handle the URLs
        let server = new Server(config.server.environment.development, router);
        server.start(); // Starting RESTful application
    }
}