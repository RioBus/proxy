import {Utils} from '../common/utils';
import {Factory} from '../common/factory';
import {DataAccessFactory} from '../dataaccess/factory';

let Strings = Factory.getStrings();

/**
 * Data Search business logics
 * @class SearchBusiness
 * @constructor
 */
export class SearchBusiness{

    constructor(){
        "use strict";
        this.logger = Factory.getRuntimeLogger();
    }

    /**
     * Search for the requested lines
     * @param {string} lines
     * @param {number} platformId
     * @returns {Array}
     */
    getDataByLine(lines, platformId){
        "use strict";
        let platform = this.getPlatformName(platformId);
        this.logger.info('Requesting line(s): '+lines);

        let analytics = Factory.getAnalytics();
        let flag = Strings.analytics;
        analytics.trackEvent(flag.event.restHit, flag.label.rest, platform, function(error, response){});
        analytics.trackEvent(flag.event.restHit, flag.label.busCode, lines, function(error, response){});

        let dataAccess = DataAccessFactory.getBusDataAccess();
        return dataAccess.getByLines(lines);
    }

    /**
     * Search for the requested cars
     * @param {*} request
     * @returns {Array}
     */
    getDataByCode(lines, platformId){
        "use strict";
        let platform = this.getPlatformName(platformId);
        this.logger.info('Requesting order(s): '+lines);

        let analytics = Factory.getAnalytics();
        let flag = Strings.analytics;
        analytics.trackEvent(flag.event.restHit, flag.label.rest, platform, function(error, response){});
        analytics.trackEvent(flag.event.restHit, flag.label.busCode, lines, function(error, response){});

        let dataAccess = DataAccessFactory.getBusDataAccess();
        return dataAccess.getByCode(lines);
    }

    /**
     * Search for all the lines
     * @returns {Array}
     */
    getAllData(){
        "use strict";
        this.logger.info('Requesting all lines');
        let dataAccess = DataAccessFactory.getBusDataAccess();
        return dataAccess.getAllLines();
    }

    /**
     * Search for sample lines
     * @returns {Array}
     */
    getSampleData(){
        "use strict";
        this.logger.info('Requesting samples');
        let dataAccess = DataAccessFactory.getBusDataAccess();
        return dataAccess.getSamples();
    }

    /**
     * Gets the last data update timestamp
     * @returns {String}
     */
    getLastUpdate(){
        "use strict";
        let dataAccess = DataAccessFactory.getBusDataAccess();
        return dataAccess.requestLastUpdate();
    }

    /**
     * Gets the given platform name
     * @param platform
     * @returns {String}
     */
    getPlatformName(platform){
        "use strict";
        let string = Strings.business.main.platform;
        switch(platform){
            case 1: return string.web;
            case 2: return string.mobile;
            case 3: return string.legacy;
            default: return string.notSet;
        }
    }
}