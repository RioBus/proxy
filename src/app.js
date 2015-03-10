import {Router} from './core/router';
import {Server} from './core/server';
import {Forker} from './core/forker';

import {ServiceFactory} from './service/servicefactory';
import {Factory} from './common/factory';

export class App{

	static main(){

        let analytics = Factory.getAnalytics();
        analytics.initialize();
        analytics.trackPage('REST', '/en/serverside/test', App.analyticsResponse);

        let config = Factory.getConfig();
        let forker = new Forker();
        forker.addArg(config.server.dataRequirer);
        let dataServer = forker.spawn(config.projectRoot+'/'+config.bootstrapper);
        let service = ServiceFactory.getDataServerService();
        service.serveData(dataServer);

        let router = new Router(config.server.driver, App.root);
        router.registerResources(config.resources);

        let server = new Server(config.server.environment.development, router);
        server.start();
	}

    static analyticsResponse(error, response){
        "use strict";
        if (!error && response.statusCode === 200) {
            // console.log('Page has been tracked with Google Analytics');
        }
    }
}