/**
 * Implements Google Analytics tracking system
 *
 * @class Analytics
 * @constructor
 */
export class Analytics{

    constructor(ua, host){
        "use strict";
        this.ua = ua;
        this.host = host;
        this.analytics = require("nodealytics");
    }

    /**
     * Starts the tracking service
     * @param {Function} callback (params: error, response)
     */
    initialize(callback){
        "use strict";
        this.analytics.initialize(this.ua, this.host, callback);
    }

    /**
     * Tracks the request to a given page
     *
     * @param {String} id Tracking identifier
     * @param {String} path Request path
     * @param {Function} callback (params: error, response)
     */
    trackPage(id, path, callback){
        "use strict";
        this.analytics.trackPage(id, path, callback);
    }

    /**
     * Tracks a given event
     *
     * @param {String} id Tracking identifier
     * @param {String} path Request path
     * @param {label} label Event label
     * @param {Function} callback (params: error, response)
     */
    trackEvent(id, path, label, callback){
        "use strict";
        this.analytics.trackEvent(id, path, label, callback);
    }
}