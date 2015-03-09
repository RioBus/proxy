import {Nodelicious} from './core/nodelicious';
import {App} from './app';

if(process.argv<2){
    Nodelicious.bootstrap(App.main);
} else {
    let dataServiceModule = require('./'+process.argv[2]);
    let dataServiceModuleClass = Object.keys(dataServiceModule)[0];
    let DataRequirer = dataServiceModule[dataServiceModuleClass];
    Nodelicious.bootstrap(DataRequirer.main);
}