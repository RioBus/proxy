export class Server{

    constructor(config, router){
        this.config = config;
        this.router = router;
    }

    start(callback=null){
        let ip = this.config.ip;
        let port = this.config.port;
        return this.router.start(ip, port,callback);
    }
}
