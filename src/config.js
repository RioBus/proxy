/* global __dirname, process; */
/**
 * Application configuration
 * You may use it to describe every global configuration data
 */
module.exports = {
    root: __dirname,
    logs: {
        runtime: `/tmp/riobus/log/runtime-${new Date("Y-m-d").toISOString()}.log`,
        server: `/tmp/riobus/log/server-${new Date("Y-m-d").toISOString()}.log`
    },
    server: {
        ip: '0.0.0.0',
        port: 8080
    },
    database: {
        dbName: process.env.RIOBUS_DB_NAME  || 'riobus',
        host: process.env.RIOBUS_DB_HOST    || 'localhost',
        port: process.env.RIOBUS_DB_PORT    || 27017,
        user: process.env.RIOBUS_DB_USER    || '',
        pass: process.env.RIOBUS_DB_PASS    || ''
    },
    analytics: {
        ua: process.env.RIOBUS_ANALYTICS_UA     || '',
        host: process.env.RIOBUS_ANALYTICS_HOST || ''
    },
    resources: [
        'main/mainResource'
    ]
};