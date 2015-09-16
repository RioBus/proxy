'use strict';
/**
 * Creates a new synchronized HttpRequest
 *
 * @class HttpRequest
 * @constructor
 */
class HttpRequest{

    constructor(){
        this.driver = require('sync-request');
    }

    /**
     * Makes GET request
     * @param {String} host Host URL
     * @param {Object} options
     * @returns {*}
     */
    get(host, options){
        return this.driver('GET', host, options);
    }

    /**
     * Makes POST request
     * @param {String} host Host URL
     * @param {Object} options
     * @returns {*}
     */
    post(host, options){
        return this.driver('POST', host, options);
    }

    /**
     * Makes PUT request
     * @param {String} host Host URL
     * @param {Object} options
     * @returns {*}
     */
    put(host, options){
        return this.driver('PUT', host, options);
    }

    /**
     * Makes DELETE request
     * @param {String} host Host URL
     * @param {Object} options
     * @returns {*}
     */
    delete(host, options){
        return this.driver('DELETE', host, options);
    }
}
module.exports = HttpRequest;