module.exports = function(gulp, plugins, paths){
	plugins.tsd({
        "command": "reinstall",
        "latest": true,
        "config": paths.root+"/tsd.json"
    });
};