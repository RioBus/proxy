declare var require;

/**
 * Manipulates files
 * @class File
 */
class File{
    
    private directory: string;
    private file: string;
    private fs: any;
    private fullPath: string;

    public constructor(path: string){
        this.fullPath = path;
        var splittedPath: string[] = path.split('/');
        this.file = splittedPath.pop();
        this.directory = splittedPath.join('/');
        this.fs = require("fs-extra");
    }
    
    /**
     * Get the full file path
     * @return {string}
     */
    public getFilePath(): string {
        return this.fullPath;
    }
    
    /**
     * Get the directory where the file is
     * @return {string}
     */
    public getDirPath(): string {
        return this.directory;
    }
    
    /**
     * Get the file name
     * @return {string}
     */
    public getFileName(): string {
        return this.file;
    }

    /**
     * Appends content to end of file
     * @param {string} content
     * @return {void}
     */
    public append(content: string): void {
        var self = this;
        this.fs.ensureFile(this.fullPath, (e1) => {
            if(e1) throw e1;
            else self.fs.appendFile(self.fullPath, content+'\n', (e2) => {
                if(e2) throw e2;
            });
        });
    }

    /**
     * Writes the given content to a file. Ovewrites if it already has any content.
     * @param {string} content
     * @return {void}
     */
    public write(content: string): void {
        this.fs.outputFile(this.fullPath, content, (e2) => {
            if(e2) throw e2;
        });
    }

    /**
     * Reads the file content
     * @return string
     */
    public read(): string {
        return this.fs.readFileSync(this.fullPath, 'utf8');
    }
}
export = File;