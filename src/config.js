import {Utils} from './common/utils';
import {Cache} from './core/cache';

module.exports = {
    projectRoot: __dirname,
    bootstrapper: 'index',
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
            timeout: 20000
        },
        maxSearchedItems: 10,
        numberOfLastLogLines: 40,
        dataRequirer: 'datarequirer'
    },
    resources: [
        'resources/alldata',
        'resources/datarequirerlog',
        'resources/log',
        'resources/main',
        'resources/search',
        'resources/serverlog'
    ],
    analytics: {
        ua: 'UA-49628280-3',
        host: 'riob.us'
    }
};