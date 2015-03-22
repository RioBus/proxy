module.exports = {
    projectRoot: __dirname,
    projectName: 'RioBus',
    main: 'index',
    runtimeLog: 'runtime.log',
    server: {
        environment: {
            development: {
                port: '8081',
                ip: '127.0.0.1'
            },
            production: {
                port: '80',
                ip: '66.228.60.200'
            }
        },
        dataProvider: {
            host: 'dadosabertos.rio.rj.gov.br',
            path: {
                bus: '/apiTransporte/apresentacao/rest/index.cfm/onibus',
                itinerary: '/apiTransporte/Apresentacao/csv/gtfs/onibus/percursos/gtfs_linha$$-shapes.csv'
            },
            intervalTime: 15000,
            timeout: 20000,
            log: 'data-server.log',
            dataPath: 'riobus.busData.json'
        },
        log: 'server.log',
        maxSearchItems: 10,
        numberOfLastLogLines: 40
    },
    providers: [
        'provider/data'
    ],
    resources: [
        'resource/alldata',
        'resource/log',
        'resource/search',
        'resource/serverlog',
        'resource/dataproviderlog',
        'resource/lastupdate',
        'resource/itinerary'
    ],
    analytics: {
        ua: 'UA-49628280-3',
        host: 'riob.us'
    }
};