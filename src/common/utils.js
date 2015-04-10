/**
 * Utilities class
 */
export class Utils{

    /**
     * Get the current Date string
     * @returns {string}
     */
    static getTimestamp(){
        "use strict";
        return (new Date()).toLocaleString();
    }

    /**
     * Imports dynamically the index-th class in the module
     * @param {String} moduleName Module to import the class
     * @param {Integer} index Index of the class in the module
     * @returns {*}
     */
    static dynamicClassImport(moduleName, index=0){
        "use strict";
        moduleName = require(moduleName);
        let moduleClass = Object.keys(moduleName)[index];
        return moduleName[moduleClass];
    }

}
