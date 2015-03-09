import {Router} from './core/router';
import {Server} from './core/server';
import {Forker} from './core/forker';

import {DataServerService} from './service/dataserver';

export class App{

    get root(){
        "use strict";
        return __dirname;
    }

	static main(){
        let config = require('./config');
        let forker = new Forker();

        let dataServer = forker.fork(config.bootstrapper, App.root, [config.server.dataRequirer]);

        let dataService = new DataServerService();
        dataService.serveData(dataServer);

        let router = new Router(config.server.driver);
        router.registerResources(config.resources);

        let server = new Server(config.server.development, router);
        server.start();
	}
}