import {Utils} from './utils';

export class Logger{

    constructor(fileName){
        "use strict";
        this.driver = console;
        this.filePath = fileName;
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
        this.log(message, 'INFO');
    }

    alert(message){
        "use strict";
        this.log(message, 'ALERT');
    }

    error(message){
        "use strict";
        this.log(message, 'ERROR');
    }
}