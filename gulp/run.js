module.exports = function(gulp, plugins, paths){
	return plugins.shell.task("node "+paths.build+"/index.js");
};