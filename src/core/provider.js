import {Forker} from '../core/forker';
import {Factory} from '../common/factory';

export class Provider{

    constructor(providers=[]){
        "use strict";
        let config = Factory.getConfig();
        this.mainModule = config.projectRoot+'/'+config.main;
        this.childProcess = {};
        this.registerProviders(providers);
    }

    registerProviders(providers){
        "use strict";
        this.providers = providers;
    }

    addProvider(provider){
        "use strict";
        if(this.childProcesses.length<=0) {
            this.providers.push(provider);
        } else {
            this.provide(provider);
        }
    }

    provide(provider){
        "use strict";
        var moduleName = provider.split('/');
        moduleName = moduleName[moduleName.length-1];
        let forker = new Forker();
        forker.addArg(provider);
        this.childProcess[moduleName] = forker.fork(this.mainModule);
    }

    stopProvider(name){
        "use strict";
        this.childProcess[name].kill('SIGINT');
        delete this.childProcess[name];
    }

    stop(){
        "use strict";
        let keys = Object.keys(this.childProcess);
        for(var key of keys){
            this.stopProvider(key);
        }
    }

    start(){
        "use strict";
        for(var provider of this.providers){
            this.provide(provider);
        }
    }
}