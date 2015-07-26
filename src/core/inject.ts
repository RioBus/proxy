declare var require;

import Config = require("../config");

/**
 * Injects a class instance to the module
 * @param {string} dependencyPath Class module path
 * @param {any} (Optional) params Object with class constructor params
 * @return {Object}
 */
function $inject(dependencyPath: string, params?: any): any {
	return new (require(Config.rootPath + "/" + dependencyPath))(params);
}
export = $inject;