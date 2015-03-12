import {ServerData} from '../domain/serverdata';
import {Utils} from '../common/utils';
import {Factory} from '../common/factory';
import {DataAccessFactory} from '../dataaccess/factory';

let Strings = Factory.getStrings();

export class MainBusiness{

    parseQueryData(request){
        "use strict";
        if(!(Object.keys(request.params).length>0)) return Strings.business.main.response.codeNotSent;
        let lines = request.params.lines;
        let platform = this.getPlatformName(request.platformId);
        console.log('Searching for line(s): %s', lines);

        let analytics = Factory.getAnalytics();
        let flag = Strings.analytics;
        analytics.trackEvent(flag.event.restHit, flag.label.rest, platform, this.track);
        analytics.trackEvent(flag.event.restHit, flag.label.busCode, lines, this.track);

        let dataAccess = DataAccessFactory.getBusDataAccess();
        return dataAccess.getByLines(lines);
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