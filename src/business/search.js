import {Utils} from '../common/utils';
import {Factory} from '../common/factory';
import {DataAccessFactory} from '../dataaccess/factory';

let Strings = Factory.getStrings();

export class SearchBusiness{

    parseQueryData(request){
        "use strict";
        let logger = Factory.getLogger();
        let lines = request.params.lines;
        let platform = this.getPlatformName(request.platformId);
        logger.info('Requesting line(s): '+lines);

        let analytics = Factory.getAnalytics();
        let flag = Strings.analytics;
        analytics.trackEvent(flag.event.restHit, flag.label.rest, platform, this.track);
        analytics.trackEvent(flag.event.restHit, flag.label.busCode, lines, this.track);

        let dataAccess = DataAccessFactory.getBusDataAccess();
        return dataAccess.getByLines(lines);
    }

    getAllData(){
        "use strict";
        let logger = Factory.getLogger();
        logger.info('Requesting all lines');
        let dataAccess = DataAccessFactory.getBusDataAccess();
        return dataAccess.getAllLines();
    }

    track(error, response){
        "use strict";
        if (!error && response.statusCode === 200) {
            //console.log('Event has been tracked with Google Analytics');
        }
    }

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