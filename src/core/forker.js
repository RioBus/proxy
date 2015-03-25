/**
 * Helps to manage child processes in the application
 * @class Forker
 * @constructor
 */
export class Forker{

    constructor(){
        "use strict";
        this.process = require('child_process');
        this.args = [];
    }

    /**
     * Adds a process argument to the argv
     * @param {String} arg process arg
     */
    addArg(arg){
        "use strict";
        this.args.push(arg);
    }

    /**
     * Cleans the process argument list
     */
    flush(){
        "use strict";
        this.args = [];
    }

    /**
     * Creates a new fork
     * @param {String} moduleName module file path
     * @returns {*}
     */
    fork(moduleName){
        "use strict";
        return this.process.fork(moduleName + '.js', this.args);
    }

    /**
     * Spawns a new fork
     * @param {String} moduleName module file path
     * @returns {*}
     */
    spawn(moduleName){
        "use strict";
        return this.process.spawn('node',[moduleName+'.js', this.args.join(' ')]);
    }
}