export class Nodelicious{

    static bootstrap(callback){
        var config = JSON.parse(require('fs').readFileSync('src/config.json'));
        callback(config);
    }

}