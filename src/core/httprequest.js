export class HttpRequest{

    constructor(){
        "use strict";
        this.driver = require('http');
    }

    get options(){
        "use strict";
        return {
            host: this.host,
            path: this.path,
            agent: this.agent,
            headers: {
                'Accept-Encoding': this.responseEncoding,
                Accept: this.responseType
            }
        };
    }

    set agent(value){
        "use strict";
        this.ag = value;
    }

    get agent(){
        "use strict";
        return this.ag;
    }

    set responseType(value){
        "use strict";
        this.rt = value;
    }

    get responseType(){
        "use strict";
        return this.rt;
    }

    set responseEncoding(value){
        "use strict";
        this.re = value;
    }

    get responseEncoding(){
        "use strict";
        return this.re;
    }

    get(host, callback){
        "use strict";
        return this.driver.get(host, callback);
    }
}