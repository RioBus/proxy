import {Utils} from './common/utils';

module.exports = {
    bootstrapper: 'index',
    server: {
        development: {
            port: '80',
            ip: '127.0.0.1',
            maxSearchedItems: 10,
            numberOfLastLogLines: 40
        },
        production: {
            port: '80',
            ip: '66.228.60.200',
            maxSearchedItems: 10,
            numberOfLastLogLines: 40
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
        driver: 'express',
        dataRequirer: 'datarequirer'
    },
    resources: [
        'resources/main'
    ],
    logger: {
        driver: 'winston',
        consoleConfig: {
            colorize: true,
            timestamp: Utils.getTimestamp()
        },
        fileConfig: {
            colorize: true,
            handleExceptions: true,
            filename: 'logs/data-service.log',
            timestamp: Utils.getTimestamp()
        }
    }
};