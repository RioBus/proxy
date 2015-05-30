/// <reference path="../../defs/tsd.d.ts" />
/**
 * Creates a new synchronized HttpRequest
 *
 * @class HttpRequest
 * @constructor
 */
class HttpRequest{
    
    private driver: any;

    public constructor(){
        "use strict";
        this.driver = require('request');
    }

    /**
     * Makes GET request
     * @param {String} host Host URL
     * @param {Object} options
     * @returns {*}
     */
    public get(host: string, options?: any): any{
        "use strict";
        return this.driver.get(host, options);
    }

    /**
     * Makes POST request
     * @param {String} host Host URL
     * @param {Object} options
     * @returns {*}
     */
    public post(host: string, data: any, callback?: (error: Error, response: any, body: string)=>void): any{
        "use strict";
        return this.driver.post({url: host, formData: data}, callback);
    }
}

export = HttpRequest;