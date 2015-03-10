export class LogStream{

    constructor(size){
        "use strict";
        let stream = require('stream');
        let writableStream = new stream.Writable();
        writableStream.logs = [];
        writableStream._write = this.write;
        this.stream = writableStream;
        this.size = size;
    }

    get logs(){
        "use strict";
        return this.writableStream.logs;
    }

    get lastLine(){
        "use strict";
        var response = '- timestamp\t\t\t\t\tlevel\tmessage\n';
        for(var log of this.logs){
            response += log;
        }
        return response;
    }

    pushMessage(message){
        "use strict";
        this.stream.logs.push(message);
    }

    write(chunk, encoding, done){
        "use strict";
        try {
            let log = JSON.parse(chunk.toString());
            this.pushMessage("- " + log.timestamp + "\t" + log.level + "\t" + log.message + "\n");
        }catch(e){
            this.pushMessage("- bad log line: " + e.messages);
        }
        if (this.logs.length > this.size)
            this.logs.shift();
        done();
    }

}