import {App} from '../app';
import {ServerData} from '../domain/serverdata';
import {Utils} from '../common/utils';
import {Factory} from '../common/factory';

let Strings = Factory.getStrings();

export class MainBusiness{

    parseQueryData(query){
        "use strict";
        if(!(Object.keys(query).length>0)) return false;

        let busCode = query.busca;
        let platform = this.getPlatformName(query.s);

        var searchInput = Strings.business.main.response.codeNotSent;
        if (busCode){
            searchInput = busCode;
            let analytics = Factory.getAnalytics();
            let flag = Strings.analytics;
            analytics.trackEvent(flag.event.restHit, flag.label.rest, platform, this.track);
            analytics.trackEvent(flag.event.restHit, flag.label.busCode, searchInput, this.track);

            return Utils.getQueriedItemAsJson(searchInput, Factory.getConfig().server);
        }
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