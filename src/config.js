import {Utils} from './common/utils';

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
        dataReporter: {
            intervalTime: 180000,
            busLines: [485, 210, 125, 616, 625, 341]
        },
        dataServer: {
            host: 'dadosabertos.rio.rj.gov.br',
            path: '/apiTransporte/apresentacao/rest/index.cfm/onibus',
            intervalTime: 15000,
            timeout: 20000,
            log: 'data-server.log'
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
        'resource/lastupdate'
    ],
    analytics: {
        ua: 'UA-49628280-3',
        host: 'riob.us'
    }
};