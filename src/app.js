import {Router} from './core/router';
import {Server} from './core/server';
import {Provider} from './core/provider';

import {ServiceFactory} from './service/factory';
import {Factory} from './common/factory';

export class App{

	static main(argv){
        let config = Factory.getConfig();

        let analytics = Factory.getAnalytics();
        analytics.initialize();
        analytics.trackPage('REST', '/en/serverside/test', function(error, response){});

        let logger = Factory.getRuntimeLogger();
        logger.info('Starting the server...');

        let provider = new Provider(config.providers);
        provider.start();

        let router = new Router();
        router.registerResources(config.resources);
        let server = new Server(config.server.environment.development, router);
        server.start();
	}
}