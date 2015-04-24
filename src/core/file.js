/**
 * Manipulates files
 *
 * @class File
 * @constructor
 */
export class File{

    constructor(path){
        path = path.split('/');
        this.file = path.pop();
        this.directory = path.join('/');
        this.driver = require('fs');
        this.mkdirp = require('mkdirp');
    }

    /**
     * Appends content to end of file
     * @param {string} content
     */
    append(content){
        let self = this;
        this.mkdirp(this.directory, function(e1){
            if(e1) throw e1;
            else self.driver.appendFile(self.directory + '/' + self.file, content+'\n', function(e2){
                if(e2) throw e2;
            });
        });
    }

    /**
     * Writes the given content to a file. Ovewrites if it already has any content.
     * @param {*} content
     */
    write(content){
        let self = this;
        this.mkdirp(this.directory, function(e1){
            if(e1) throw e1;
            else self.driver.writeFile(self.directory + '/' + self.file, content, function(e2){
                if(e2) throw e2;
            });
        });
    }

    /**
     * Reads the file content
     * @return string
     */
    read(){
        return this.driver.readFileSync(this.directory + '/' + this.file, 'utf8');
    }
}