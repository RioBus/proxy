import {Router} from './core/router';
import {Server} from './core/server';
import {Forker} from './core/forker';

import {DataServerService} from './service/dataserver';
import {Analytics} from './common/analytics';

export class App{

    get root(){
        "use strict";
        return __dirname;
    }

	static main(){
        App.config = require('./config');
        let forker = new Forker();

        App.analytics = new Analytics(App.config.analytics.ua, App.config.analytics.host);
        App.analytics.initialize();
        App.analytics.trackPage('REST', '/en/serverside/test', App.analyticsResponse);

        let dataServer = forker.fork(App.config.bootstrapper, App.root, [App.config.server.dataRequirer]);

        let dataService = new DataServerService();
        dataService.serveData(dataServer);

        App.router = new Router(App.config.server.driver, App.root);
        App.router.registerResources(App.config.resources);

        App.server = new Server(App.config.server.development, router);
        App.server.start();
	}

    static analyticsResponse(error, response){
        "use strict";
        if (!error && response.statusCode === 200) {
            // console.log('Page has been tracked with Google Analytics');
        }
    }
}