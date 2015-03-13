export class Forker{

    constructor(){
        "use strict";
        this.process = require('child_process');
        this.args = [];
    }

    addArg(arg){
        "use strict";
        this.args.push(arg);
    }

    flush(){
        "use strict";
        this.args = [];
    }

    fork(moduleName){
        "use strict";
        return this.process.fork(moduleName + '.js', this.args);
    }

    spawn(moduleName){
        "use strict";
        return this.process.spawn('node',[moduleName+'.js', this.args.join(' ')]);
    }
}