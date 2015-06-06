/// <reference path="../../defs/tsd.d.ts" />
import Config = require("../config");

function $inject(dependencyPath: string): any {
	return new (require(Config.rootPath + "/" + dependencyPath))();
}
export = $inject;