import {Server} from './core/server';
import {Resource, ResourceList} from './resources/resource';
import {MainResource} from './resources/main';

export class App{

	static main(){
        App.config = require('./config');
        var server = new Server(App.config.server);
        var resources = new ResourceList();
        App.registerResourceList(resources);
        server.registerResources(resources.list);
        server.start(App.startCallback);
	}

    static startCallback(){
        console.log('Server listening to '+App.config.server.ip+':'+App.config.server.port);
    }

    static registerResourceList(handler){
        handler.registerResource(new MainResource());
    }
}