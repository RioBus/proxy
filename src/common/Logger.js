export class Logger{

    constructor(consoleConfig, fileConfig, driverName){
        "use strict";
        let driver = require(driverName);
        this.driver = new driver.Logger({
            transports: [
                new winston.transports.Console(consoleConfig),
                new winston.transports.File(fileConfig)
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