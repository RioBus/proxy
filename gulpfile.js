/* global __dirname */
var gulp = require("gulp");
var plugins = require('gulp-load-plugins')();

var root = __dirname;
var compiled = root+"/.compiled";
var paths = {
    root: root,
    build: compiled+"/src",
    buildTest: compiled+"/test",
    dist: root+"/dist",
    src: root+"/src",
    test: root+"/test"
};

function task(name) {
    var args = Array.prototype.slice.call(arguments, 1);
    args.unshift(gulp, plugins);
    return require('./gulp/' + name).apply({}, args);
}

gulp.task("build",       task("compile",     paths));
gulp.task("buildTest",   ["build"],          task("compile.test", paths));
gulp.task("release",     ["build"],          task("release",      paths));
gulp.task("run",         task("run",         paths));
gulp.task("run-release", task("run.release", paths));
gulp.task("default",     ["build"]);