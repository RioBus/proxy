import {Nodelicious} from './core/nodelicious';
import {App} from './app';
import {Utils} from './common/utils';

if(process.argv.length<=2){
    Nodelicious.bootstrap(App.main);
} else {
    Application = Utils.dynamicClassImport('./'+process.argv[2]);
    Nodelicious.bootstrap(Application.main);
}