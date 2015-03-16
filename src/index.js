import {Nodelicious} from './core/nodelicious';

var moduleName = (process.argv.length>2)? process.argv[2] : 'app';
let Application = Nodelicious.dynamicClassImport(__dirname+'/'+moduleName);
Nodelicious.bootstrap(Application.main, process.argv);