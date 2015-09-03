declare var require;
import Sync = require("./sync");
/**
 * Manipulates files
 * @class File
 */
class File {
    
    private directory: string;
    private file: string;
    private fs: any;
    private fullPath: string;

    public constructor(path: string) {
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
     */
    public append(content: string): void {
        try {
            Sync.promise(this.fs, this.fs.ensureFile, this.fullPath);
            Sync.promise(this.fs, this.fs.appendFile, this.fullPath, content+'\n');
        } catch (e) {
            throw e;
        }
    }

    /**
     * Writes the given content to a file. Ovewrites if it already has any content.
     * @param {*} content
     */
    public write(content: string): void {
        try {
            Sync.promise(this.fs, this.fs.outputFile, this.fullPath, content);
        } catch (e) {
            throw e;
        }
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