/// <reference path="../../defs/node/node.d.ts" />
/**
 * Manipulates files
 *
 * @class File
 * @constructor
 */
class File{
    
    private file:string;
    private directory:string;
    private driver:any;
    private mkdirp:any;

    public constructor(path:string){
        var splittedPath:string[] = path.split('/');
        this.file = splittedPath.pop();
        this.directory = splittedPath.join('/');
        this.driver = require('fs');
        this.mkdirp = require('mkdirp');
    }

    /**
     * Appends content to end of file
     * @param {string} content
     */
    public append(content:string): void{
        var self = this;
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
    public write(content:string): void{
        var self = this;
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
    public read(): string[]{
        return this.driver.readFileSync(this.directory + '/' + this.file, 'utf8');
    }
}
export = File;