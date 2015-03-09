import {App} from '../app';
import {ServerData} from '../domain/serverdata';

let Strings = require('../strings');

export class MainBusiness{

    parseQueryData(query){
        "use strict";
        if(!(Object.keys(query).length>0)) return false;

        let busCode = query.busca;
        let platform = this.getPlatformName(query.s);

        var searchInput = Strings.business.main.response.codeNotSent;
        if (busCode){
            searchInput = busCode;
            let analytics = App.analytics;
            analytics.trackEvent('REST+Hit', 'REST', platform, this.track);
            analytics.trackEvent('REST+Hit', 'Linha', searchInput, this.track);

            return this.getQueriedItemAsJson(searchInput);
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
        switch(platform){
            case 1: return Strings.business.main.platform.web;
            case 2: return Strings.business.main.platform.mobile;
            case 3: return Strings.business.main.platform.legacy;
            default: return Strings.business.main.platform.notSet;
        }
    }

    getQueriedItemAsJson(busCode){
        let splitedQuery = this.returnQueriedItemsAsArray(queryString);
        let returnData = this.selectAndConcatenateData(splitedQuery);
        return {
            COLUMNS:["DATAHORA","ORDEM","LINHA","LATITUDE","LONGITUDE","VELOCIDADE", "DIRECAO"],
            DATA: returnData,
            LASTUPDATE: ServerData.lastUpdate,
            LASTSTATUS: ServerData.lastStatus
        };
    }

    returnQueriedItemsAsArray(string){
        if (!string) return [];

        let configServer = App.server.config;

        var queryItems = string.split(",");
        if (queryItems.length > configServer.maxSearchedItems)
            queryItems = queryItems.slice(0, configServer.maxSearchedItems);

        var hash = {};
        for (var i = queryItems.length - 1; i >= 0; i--) {
            if (!hash[queryItems[i]])
                hash[queryItems[i]] = true;
        };
        return Object.keys(hash);
    }

    selectAndConcatenateData(items){
        var returnArray = [];
        for (var i = items.length - 1; i >= 0; i--) {
            var array = data[items[i].toUpperCase()];
            if (array)
                returnArray = returnArray.concat(array);
        };
        return returnArray;
    }
}