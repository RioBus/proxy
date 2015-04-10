export class Server{

    constructor(config, router){
        this.config = config;
        this.router = router;
    }

    start(callback=null){
        let ip = this.config.ip;
        let port = this.config.port;
        this.router.start(ip, port, function(){
            if(callback!==null) callback();
            console.log('Server listening to '+ip+':'+port+' ...');
        });
    }
}
