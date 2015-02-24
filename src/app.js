import {Server} from './lib/server';
import {ResourceList} from './resources/ResourceList';

export class App{

	static main(config){
        App.config = config;
        var server = new Server(App.config.server);
        var resources = new ResourceList();
        server.registerResources(resources.list);
        //server.registerResource(new MainResource());
        server.start(App.startCallback);
	}

    static startCallback(){
        let config = App.config;
        console.log('Server listening to '+config.server.ip+':'+config.server.port);
    }

}