export class Nodelicious{

    static dynamicClassImport(moduleName){
        "use strict";
        moduleName = require(moduleName);
        let moduleClass = Object.keys(moduleName)[0];
        return moduleName[moduleClass];
    }

    static bootstrap(callback, argv){
        callback(argv);
    }

}