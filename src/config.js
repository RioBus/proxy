/* global __dirname, process; */
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
    database: {
        dbName: process.env.NoDEJS_DB_NAME  || 'nodejs',
        host: process.env.NODEJS_DB_HOST    || 'localhost',
        port: process.env.NODEJS_DB_PORT    || 27017,
        user: process.env.NODEJS_DB_USER    || '',
        pass: process.env.NODEJS_DB_PASS    || ''
    },
    resources: [
        'main/mainResource'
    ]
};