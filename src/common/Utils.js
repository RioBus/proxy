export class Utils{

    static getTimestamp(){
        "use strict";
        return (new Date()).toLocaleString();
    }

    static dynamicClassImport(moduleName){
        "use strict";
        moduleName = require(moduleName);
        let moduleClass = Object.keys(moduleName)[0];
        return moduleName[moduleClass];
    }

    static getQueriedItemAsJson(busCodes, config){
        let splittedQuery = Utils.returnQueriedItemsAsArray(busCodes, config);
        let returnData = Utils.selectAndConcatenateData(splittedQuery);
        return {
            COLUMNS:["DATAHORA","ORDEM","LINHA","LATITUDE","LONGITUDE","VELOCIDADE", "DIRECAO"],
            DATA: returnData,
            LASTUPDATE: ServerData.lastUpdate,
            LASTSTATUS: ServerData.lastStatus
        };
    }

    static returnQueriedItemsAsArray(string, configServer){
        if (!string) return [];

        var queryItems = string.split(",");
        if (queryItems.length > configServer.maxSearchedItems)
            queryItems = queryItems.slice(0, configServer.maxSearchedItems);

        var hash = {};
        for (var i = queryItems.length - 1; i >= 0; i--) {
            if (!hash[queryItems[i]])
                hash[queryItems[i]] = true;
        }
        return Object.keys(hash);
    }

    static selectAndConcatenateData(items){
        var returnArray = [];
        for (var i = items.length - 1; i >= 0; i--) {
            var array = data[items[i].toUpperCase()];
            if (array)
                returnArray = returnArray.concat(array);
        }
        return returnArray;
    }

}
