export class Router{

    constructor(driver){
        this.registerDriver(driver);
    }

    route(method, route, callback){
        switch(method){
            case 'post':
                this.driver.post(route, callback);
                break;
            case 'put':
                this.driver.put(route, callback);
                break;
            case 'delete':
                this.driver.delete(route, callback);
                break;
            case 'get':
            default:
                this.driver.get(route, callback);
                break;
        }
    }

    get config(){
        return this.conf;
    }

    registerDriver(driver){
        let ServerDriver = require(driver);
        this.driver = new ServerDriver();
    }

    registerResources(resources){
        for(var resource of resources){
            let resourceModule = require('../'+resource);
            let resourceModuleClass = Object.keys(resourceModule)[0];
            let Resource = resourceModule[resourceModuleClass];
            resource = new Resource();
            this.route('get', resource.route(), resource.get);
            this.route('post', resource.route(), resource.post);
            this.route('put', resource.route(), resource.put);
            this.route('delete', resource.route(), resource.delete);
        }
    }

    start(ip, port, callback=null){
        this.driver.listen(port, ip, callback);
    }
}