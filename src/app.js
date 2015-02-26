import {Server} from './lib/server';
import {ResourceList} from './lib/ResourceList';
import {MainResource} from './resources/MainResource';

export class App{

	static main(config){
        App.config = config;
        var server = new Server(App.config.server);
        var resources = new ResourceList();

        App.registerResourceList(resources);
        server.registerResources(resources.list);
        server.start(App.startCallback);
	}

    static startCallback(){
        let config = App.config;
        console.log('Server listening to '+config.server.ip+':'+config.server.port);
    }

    static registerResourceList(handler){
        handler.registerResource(new MainResource());
    }
}