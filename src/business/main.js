import {ServerData} from '../domain/serverdata';
import {Utils} from '../common/utils';
import {Factory} from '../common/factory';
import {HttpRequest} from '../core/httprequest';

let Strings = Factory.getStrings();

export class MainBusiness{

    constructor(){
        "use strict";
        this.logger = Factory.getLogger();
    }

    parseQueryData(request){
        "use strict";
        if(!(Object.keys(request.params).length>0)) return Strings.business.main.response.codeNotSent;

        let busCode = request.params.lines;
        let platform = this.getPlatformName(request.platformId);

        let analytics = Factory.getAnalytics();
        let flag = Strings.analytics;
        analytics.trackEvent(flag.event.restHit, flag.label.rest, platform, this.track);
        analytics.trackEvent(flag.event.restHit, flag.label.busCode, busCode, this.track);

        let lines = busCode.split(',');
        this.logger.info('Searching for line(s): '+lines);

        let config = Factory.getConfig().server.dataServer;

        let requirer = new HttpRequest();
        let response = requirer.get('http://'+config.host+config.path, function(response){

        });

        return lines;
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