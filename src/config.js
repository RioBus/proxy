module.exports = {
    projectRoot: __dirname,
    projectName: 'Nodelicious',
    main: 'index',
    log: 'runtime.log',
    server: {
        environment: {
            development: {
                "ip": '127.0.0.1',
                "port": '8080'
            }
        },
        "driver": 'express',
        log: 'server.log'
    },
    resources: [
        'resources/main'
    ],
    providers: []
};