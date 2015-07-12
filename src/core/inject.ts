/// <reference path="../../defs/tsd.d.ts" />
import Config = require("../config");

function $inject(dependencyPath: string, params?: any): any {
	return new (require(Config.rootPath + "/" + dependencyPath))(params);
}
export = $inject;