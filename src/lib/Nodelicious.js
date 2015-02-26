export class Nodelicious{

    static bootstrap(callback){
        let config = JSON.parse(require('fs').readFileSync('src/config.json'));
        callback(config);
    }

}