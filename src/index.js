import {Nodelicious} from './core/nodelicious';
import {App} from './app';
import {Utils} from './common/utils';

if(process.argv<2){
    Nodelicious.bootstrap(App.main);
} else {
    DataRequirer = Utils.dynamicClassImport('./'+process.argv[2]);
    Nodelicious.bootstrap(DataRequirer.main);
}