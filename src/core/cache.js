export class Cache{

    constructor(stdTTL=0, checkPeriod=600){
        "use strict";
        let NodeCache = require('node-cache');
        this.cache = new NodeCache({ stdTTL: stdTTL, checkperiod: checkPeriod });
    }

    get keys(){
        "use strict";
        return this.cache.keys();
    }

    get statistics(){
        "use strict";
        return this.cache.getStats();
    }

    set(key, value, callback=null){
        "use strict";
        return this.cache.set(key, value, callback);
    }

    get(key, callback=null){
        "use strict";
        return this.cache.get(key, callback);
    }

    delete(key, calback=null){
        "use strict";
        return this.cache.delete(key, callback);
    }

    changeTTL(key, ttl, callback=null){
        "use strict";
        return this.cache.ttl(key, ttl, callback);
    }

    flush(){
        "use strict";
        this.cache.flushAll();
    }

    onEvent(event, callback){
        "use strict";
        this.cache.on(event, callback);
    }
}