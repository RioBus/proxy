/**
 * Abstracts the router server start
 * @class Server
 * @constructor
 */
export class Server{

    constructor(config, router){
        this.config = config;
        this.router = router;
    }

    /**
     * Starts the server
     * @param {Function} callback
     * @returns {*}
     */
    start(callback=null){
        let ip = this.config.ip;
        let port = this.config.port;
        return this.router.start(ip, port,callback);
    }
}
