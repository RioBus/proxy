export class File{

    constructor(path){
        path = path.split('/');
        this.file = path.pop();
        this.directory = path.join('/');
        this.driver = require('fs');
        this.mkdirp = require('mkdirp');
    }

    append(content){
        let self = this;
        this.mkdirp(this.directory, function(e1){
            if(e1) throw e1;
            else self.driver.appendFile(self.directory + '/' + self.file, content+'\n', function(e2){
                if(e2) throw e2;
            });
        });
    }

    write(content){
        let self = this;
        this.mkdirp(this.directory, function(e1){
            if(e1) throw e1;
            else self.driver.writeFile(self.directory + '/' + self.file, content, function(e2){
                if(e2) throw e2;
            });
        });
    }

    read(){
        return this.driver.readFileSync(this.directory + '/' + this.file, 'utf8');
    }
}