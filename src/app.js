import {Router} from './core/router';
import {Server} from './core/server';
import {Provider} from './core/provider';

import {Utils} from './common/utils';

export class App{

    static main(argv){
        let config = Utils.getConfig();

        let logger = Utils.getRuntimeLogger();
        logger.info('Starting the server...');

        let provider = new Provider(config.providers);
        provider.start();

        let router = new Router();
        router.registerResources(config.resources);
        let server = new Server(config.server.environment.development, router);
        server.start();
    }
}