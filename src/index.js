import {Nodelicious} from './core/nodelicious';
import {Utils} from './common/utils';

var moduleName = (process.argv.length>2)? process.argv[2] : 'app';
let Application = Utils.dynamicClassImport(__dirname+'/'+moduleName);
Nodelicious.bootstrap(Application.main, process.argv);
