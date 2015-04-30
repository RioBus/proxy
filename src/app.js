import {Factory} from './common/factory';
import {ServiceFactory} from './service/factory';

import {Router} from './core/router';
import {Server} from './core/server';

let strings = Factory.getStrings();

/**
 * Server Application bootstrapper
 *
 * Bootstraps the RESTful service, which provides
 * the RESTful server application to handle HTTP requests.
 * @class App
 */
export class App{

    /**
     * Init RESTful server
     * Init the analytics
     *
     * @method main
     * @param {Array} argv Process arg list
     * @return {void}
     */
    static main(argv){
        "use strict";
        let config = Factory.getConfig();

        let analytics = Factory.getAnalytics();
        analytics.initialize();
        analytics.trackPage('REST', '/en/serverside/test', function(error, response){});

        let logger = Factory.getRuntimeLogger();
        logger.info(strings.provider.rest.start);

        // Configuring the RESTful router to handle HTTP requests
        let router = new Router();
        router.registerResources(config.resources); // Registering resources to handle the URLs

        let environment = (argv.indexOf("--production")>-1)?
            config.server.environment.production : config.server.environment.development;

        let server = new Server(environment, router);
        server.start(); // Starting RESTful application
    }
}