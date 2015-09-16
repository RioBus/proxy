'use strict';
var Factory = require('./common/factory');
var Router  = require('./core/router');

/**
 * Main application process.
 * @class App
 */
class App{

    /**
     * Init application
     *
     * @method main
     * @param {Array} argv Process arg list
     * @return {void}
     */
    static main(argv){
        let config = Factory.getConfig();

        let logger = Factory.getRuntimeLogger();
        logger.info('Starting the server...');

        // Configuring the RESTful router to handle HTTP requests
        let router = new Router();
        router.registerResources(config.resources); // Registering resources to handle the URLs
        let env = config.server.environment.development;
        router.start(env.ip, env.port); // Starting RESTful application
    }
}
module.exports = App;