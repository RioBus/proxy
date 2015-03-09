export class Forker{

    constructor(){
        "use strict";
        this.process = require('child_process');
    }

    fork(moduleName, root, args=[]){
        "use strict";
        let end = root.length;
        if(root[end]!=='/') root += '/';
        return this.process.fork(root + moduleName + '.js', args);
    }
}