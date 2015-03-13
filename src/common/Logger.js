import {Utils} from './utils';

export class Logger{

    constructor(fileName, flag){
        "use strict";
        this.driver = console;
        this.filePath = fileName;
        this.flag = (flag.length>0)? flag:'RUNTIME';
        this.fileStream = require('fs');
    }

    log(message, level){
        "use strict";
        let time = Utils.getTimestamp();
        let information = '['+time+']['+level+'] '+message;
        this.driver.log(information);
        this.fileStream.appendFile(this.filePath, information+'\n', function(e){ if(e) throw e; });
    }

    info(message){
        "use strict";
        this.log(message, this.flag + ' - INFO');
    }

    alert(message){
        "use strict";
        this.log(message, this.flag + ' - ALERT');
    }

    error(message){
        "use strict";
        this.log(message, this.flag + ' - ERROR');
    }
}