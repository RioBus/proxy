export class Logger{

    constructor(consoleConfig, fileConfig){
        "use strict";
        let driver = require('winston');
        this.driver = new driver.Logger({
            transports: [
                new driver.transports.Console(consoleConfig),
                new driver.transports.File(fileConfig)
            ]
        });
    }

    info(message){
        "use strict";
        this.driver.info(message);
    }

    log(level, message){
        "use strict";
        this.driver.log(level, message);
    }

    error(stack){
        "use strict";
        this.driver.error(stack);
    }

    setEvent(title, callback){
        "use strict";
        this.driver.on(title, callback);
    }
}