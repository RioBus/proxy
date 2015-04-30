/**
 * Application configuration
 * You may use it to describe every global configuration data
 */
module.exports = {
    projectRoot: __dirname,
    projectName: 'RioBus',
    main: 'index',
    runtimeLog: '/tmp/riobus/runtime.log',
    server: {
        environment: {
            development: {
                port: '8081',
                ip: '127.0.0.1'
            },
            production: {
                port: '8081',
                ip: '0.0.0.0'
            }
        },
        dataProvider: {
            host: 'dadosabertos.rio.rj.gov.br',
            path: {
                itinerary: '/apiTransporte/Apresentacao/csv/gtfs/onibus/percursos/gtfs_linha$$-shapes.csv',
                output: '/tmp/riobus'
            },
            log: '/tmp/riobus/data-server.log',
            dataPath: '/tmp/riobus/busData.json',
            mock: '/tmp/riobus/mock.busData.json'
        },
        log: '/tmp/riobus/server.log',
        maxSearchItems: 10,
        numberOfLastLogLines: 40,
        reportFilePath: '/tmp/riobus/reports/'
    },
    resources: [
        'resource/alldata',
        'resource/log',
        'resource/search',
        'resource/serverlog',
        'resource/dataproviderlog',
        'resource/lastupdate',
        'resource/itinerary',
        'resource/intervalreports',
        'resource/sample'
    ],
    analytics: {
        ua: 'UA-49628280-3',
        host: 'riob.us'
    }
};
