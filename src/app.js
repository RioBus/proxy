import {Router} from './core/router';
import {Server} from './core/server';

export class App{

	static main(){
        let config = require('./config');

        let router = new Router(config.server.driver);
        router.registerResources(config.resources);

        let server = new Server(config.server, router);
        server.start();
	}
}