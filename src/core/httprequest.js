/**
 * Creates a new synchronized HttpRequest
 *
 * @class HttpRequest
 * @constructor
 */
export class HttpRequest{

    constructor(){
        "use strict";
        this.driver = require('sync-request');
    }

    /**
     * Makes GET request
     * @param {String} host Host URL
     * @param {Object} options
     * @returns {*}
     */
    get(host, options=null){
        "use strict";
        return this.driver('GET',host, options);
    }

    /**
     * Makes POST request
     * @param {String} host Host URL
     * @param {Object} options
     * @returns {*}
     */
    post(host, options=null){
        "use strict";
        return this.driver('POST',host, options);
    }

    /**
     * Makes PUT request
     * @param {String} host Host URL
     * @param {Object} options
     * @returns {*}
     */
    put(host, options=null){
        "use strict";
        return this.driver('PUT',host, options);
    }

    /**
     * Makes DELETE request
     * @param {String} host Host URL
     * @param {Object} options
     * @returns {*}
     */
    delete(host, options=null){
        "use strict";
        return this.driver('DELETE',host, options);
    }
}