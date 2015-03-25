import {Forker} from '../core/forker';
import {Factory} from '../common/factory';

/**
 * Manages the providers loaded to the system
 *
 * @class Provider
 * @constructor
 */
export class Provider{

    constructor(providers=[]){
        "use strict";
        let config = Factory.getConfig();
        this.mainModule = config.projectRoot+'/'+config.main;
        this.childProcess = {};
        this.registerProviders(providers);
    }

    /**
     * Registers the providers list
     * @param {Array} providers
     */
    registerProviders(providers){
        "use strict";
        this.providers = providers;
    }

    /**
     * Registers a new provider in runtime
     * @param provider
     */
    addProvider(provider){
        "use strict";
        if(this.childProcesses.length<=0) {
            this.providers.push(provider);
        } else {
            this.provide(provider);
        }
    }

    /**
     * Creates an instance of the given Provider
     * @param {String} provider provider module math
     */
    provide(provider){
        "use strict";
        var moduleName = provider.split('/');
        moduleName = moduleName[moduleName.length-1];
        let forker = new Forker();
        forker.addArg(provider);
        this.childProcess[moduleName] = forker.fork(this.mainModule);
    }

    /**
     * Stops the given Provider defined process
     * @param {String} name provider name
     */
    stopProvider(name){
        "use strict";
        this.childProcess[name].kill('SIGINT');
        delete this.childProcess[name];
    }

    /**
     * Stops all Provider defined processes
     */
    stop(){
        "use strict";
        let keys = Object.keys(this.childProcess);
        for(var key of keys){
            this.stopProvider(key);
        }
    }

    /**
     * Starts all Provider defined processes
     */
    start(){
        "use strict";
        for(var provider of this.providers){
            this.provide(provider);
        }
    }
}