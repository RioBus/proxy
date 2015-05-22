/// <reference path="../../defs/tsd.d.ts" />
/**
 * Manipulates files
 *
 * @class File
 * @constructor
 */
class File{
    
    private file: String;
    private directory: String;
    private driver: any;
    private mkdirp: any;

    public constructor(path: String){
        var splittedPath: String[] = path.split('/');
        this.file = splittedPath.pop();
        this.directory = splittedPath.join('/');
        this.driver = require('fs');
        this.mkdirp = require('mkdirp');
    }

    /**
     * Appends content to end of file
     * @param {String} content
     */
    public append(content: String): void{
        var self = this;
        this.mkdirp(this.directory, (e1) => {
            if(e1) throw e1;
            else self.driver.appendFile(self.directory + '/' + self.file, content+'\n', (e2) => {
                if(e2) throw e2;
            });
        });
    }

    /**
     * Writes the given content to a file. Ovewrites if it already has any content.
     * @param {*} content
     */
    public write(content: String): void{
        var self = this;
        this.mkdirp(this.directory, (e1) => {
            if(e1) throw e1;
            else self.driver.writeFile(self.directory + '/' + self.file, content, (e2) => {
                if(e2) throw e2;
            });
        });
    }

    /**
     * Reads the file content
     * @return string
     */
    public read(): String[]{
        return this.driver.readFileSync(this.directory + '/' + this.file, 'utf8');
    }
}
export = File;