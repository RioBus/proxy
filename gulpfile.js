/* global __dirname */
var gulp = require("gulp");
var plugins = require('gulp-load-plugins')();

var root = __dirname;
var paths = {
    root: root,
    build: root+"/compiled/build",
    dist: root+"/compiled/dist",
    src: root+"/src"
};

function task(name) {
    var args = Array.prototype.slice.call(arguments, 1);
    args.unshift(gulp, plugins);
    return require('./gulp/' + name).apply({}, args);
}

gulp.task("tsd", task("tsd", paths));
gulp.task("build", task("compile", paths));
gulp.task("release", ["build"], task("release", paths));
gulp.task("run", task("run", paths));
gulp.task("run-release", task("run-release", paths));
gulp.task("default", ["build"]);