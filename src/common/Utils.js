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

}
