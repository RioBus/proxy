export class Logger{

    constructor(fileName, flag){
        "use strict";
        this.driver = console;
        this.filePath = fileName;
        this.flag = (flag)? flag:'RUNTIME';
        this.fileStream = require('fs');
    }

    log(message, level){
        "use strict";
        let time = (new Date()).toLocaleString();
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

    warning(message){
        "use strict";
        this.log(message, this.flag + ' - WARNING');
    }

    error(message){
        "use strict";
        this.log(message, this.flag + ' - ERROR');
    }
}