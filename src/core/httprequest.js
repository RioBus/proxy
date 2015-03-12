export class HttpRequest{

    constructor(){
        "use strict";
        this.driver = require('sync-request');
    }

    get(host, options=null){
        "use strict";
        return this.driver('GET',host, options);
    }

    post(host, options=null){
        "use strict";
        return this.driver('POST',host, options);
    }

    put(host, options=null){
        "use strict";
        return this.driver('PUT',host, options);
    }

    delete(host, options=null){
        "use strict";
        return this.driver('DELETE',host, options);
    }
}