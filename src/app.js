import {Router} from './core/router';
import {Server} from './core/server';

import {ServiceFactory} from './service/factory';
import {Factory} from './common/factory';

let config = Factory.getConfig();

export class App{

	static main(argv){

        let analytics = Factory.getAnalytics();
        analytics.initialize();
        analytics.trackPage('REST', '/en/serverside/test', function(error, response){});

        let logger = Factory.getLogger();
        logger.info('Starting the server...');

        let serverConfig = config.server;
        let router = new Router(serverConfig.log);
        router.registerResources(config.resources);
        let server = new Server(serverConfig.environment.development, router);
        server.start();
	}
}