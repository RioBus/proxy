import {Server} from './lib/server';
import {ResourceList} from './lib/ResourceList';
import {MainResource} from './resources/MainResource';

export class App{

    static get config(){
        return {
            ip: '127.0.0.1',
            port: '80',
            driver: 'express'
        }
    }

	static main(){
        var server = new Server(App.config);
        var resources = new ResourceList();
        App.registerResourceList(resources);
        server.registerResources(resources.list);
        server.start(App.startCallback);
	}

    static startCallback(){
        console.log('Server listening to '+App.config.ip+':'+App.config.port);
    }

    static registerResourceList(handler){
        handler.registerResource(new MainResource());
    }
}