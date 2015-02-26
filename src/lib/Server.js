export class Server{

    constructor(config){
        this.config = config;
        this.registerDriver(config.driver);
    }

    route(method, route, callback){
        switch(method){
            case 'post':
                break;
            case 'put':
                break;
            case 'delete':
                break;
            case 'get':
            default:
                this.driver.get(route, callback);
                break;
        }
    }

    registerDriver(driver){
        switch(driver){
            default:
                let Express = require('express');
                this.driver = new Express();
        }
    }

    registerResources(resources){
        for(var resource of resources){
            this.route('get', resource.route(), resource.get);
            this.route('post', resource.route(), resource.post);
            this.route('put', resource.route(), resource.put);
            this.route('delete', resource.route(), resource.delete);
        }
    }

    start(callback=null){
        this.driver.listen(this.config.port, this.config.ip, callback);
    }
}