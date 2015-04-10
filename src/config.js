/**
 * Application configuration
 * You may use it to describe every global configuration data
 */
module.exports = {
    projectRoot: __dirname,
    projectName: 'Nodelicious',
    main: 'index',
    runtimeLog: 'runtime.log',
    server: {
        environment: {
            development: {
                "ip": '127.0.0.1',
                "port": '8080'
            }
        },
        log: 'server.log'
    },
    resources: [
        'resources/main'
    ],
    providers: [
        'provider/rest'
    ]
};