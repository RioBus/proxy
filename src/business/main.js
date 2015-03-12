import {ServerData} from '../domain/serverdata';
import {Utils} from '../common/utils';
import {Factory} from '../common/factory';
import {HttpRequest} from '../core/httprequest';

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

        let config = Factory.getConfig().server.dataServer;

        let http = new HttpRequest();
        let options = {
            headers: {
                'Accept': '*/*',
                'Cache-Control': 'no-cache'
            },
            json: true
        };
        let requestPath = 'http://' + config.host + config.path + '/' + lines;
        let response = http.get(requestPath, options);
        return JSON.parse(response.getBody()).DATA;
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