import {Router} from './core/router';
import {Server} from './core/server';

import {ServiceFactory} from './service/factory';
import {Factory} from './common/factory';

let config = Factory.getConfig();

export class App{

	static main(argv){

        let analytics = Factory.getAnalytics();
        analytics.initialize();
        analytics.trackPage('REST', '/en/serverside/test', App.analyticsResponse);

        let router = new Router(config.server.driver);
        router.registerResources(config.resources);

        let serverConfig = config.server.environment.development;
        let server = new Server(serverConfig, router);
        server.start(function(){
            "use strict";
            console.log('Server running in http://%s:%s', serverConfig.ip, serverConfig.port);
        });
	}

    static analyticsResponse(error, response){
        "use strict";
        if (!error && response.statusCode === 200) {
            // console.log('Page has been tracked with Google Analytics');
        }
    }
}