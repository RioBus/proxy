/* global __dirname; */
/**
 * Application configuration
 * You may use it to describe every global configuration data
 */
module.exports = {
    root: __dirname,
    logs: {
        runtime: '/tmp/runtime.log',
        server: '/tmp/server.log'
    },
    server: {
        ip: '0.0.0.0',
        port: 8081
    },
    resources: [
        'main/mainResource'
    ]
};