/**
 * Bootstrap script.
 *
 * It does import the main routine class to start the execution.
 * When a Provider is started, it's also bootstraped here. Since it's init as
 * a new fork, the script recover the arg in process.argv and do import the
 * correct Provider and calls the main method in the new fork.
 *
 */

import {Nodelicious} from './core/nodelicious';
import {Utils} from './common/utils';

// Get the provider path from process.argv or app and begin
var moduleName = (process.argv.length>2)? process.argv[2] : 'app';
let Application = Utils.dynamicClassImport(__dirname+'/'+moduleName);

// Initializes main routine
Nodelicious.bootstrap(Application.main, process.argv);
