import {Factory} from './common/factory';
import {Provider} from './core/provider';

/**
 * Main application process.
 * @class App
 */
export class App{

    /**
     * Init providers
     *
     * @method main
     * @param {Array} argv Process arg list
     * @return {void}
     */
    static main(argv){
        let config = Factory.getConfig();

        // Registering providers
        let provider = new Provider(config.providers);
        provider.start(); // Starting providers in child forks
    }
}