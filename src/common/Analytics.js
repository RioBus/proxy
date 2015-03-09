export class Analytics{

    constructor(ua, host){
        "use strict";
        this.ua = ua;
        this.host = host;
        this.analytics = require("nodealytics");
    }

    initialize(callback){
        "use strict";
        this.analytics.initialize(this.ua, this.host, callback);
    }

    track(id, path, callback){
        "use strict";
        this.analytics.trackPage(id, path, callback);
    }
}