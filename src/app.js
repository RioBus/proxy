import {Router} from './core/router';
import {Server} from './core/server';
import {Provider} from './core/provider';

import {ServiceFactory} from './service/factory';
import {Factory} from './common/factory';

/**
 * Main application process
 * @class App
 */
export class App{

    /**
     * Init providers
     * Init RESTful server
     * Init the analytics
     *
     * @method main
     * @param {Array} argv Process arg list
     * @return {void}
     */
	static main(argv){
        let config = Factory.getConfig();

        let analytics = Factory.getAnalytics();
        analytics.initialize();
        analytics.trackPage('REST', '/en/serverside/test', function(error, response){});

        let logger = Factory.getRuntimeLogger();
        logger.info('Starting the server...');

        // Registering providers
        let provider = new Provider(config.providers);
        provider.start(); // Starting providers in child forks

        // Configuring the RESTful router to handle HTTP requests
        let router = new Router();
        router.registerResources(config.resources); // Registering resources to handle the URLs
        let server = new Server(config.server.environment.development, router);
        server.start(); // Starting RESTful application
	}
}