/* global __dirname */
var gulp = require("gulp");
var shell = require("gulp-shell");
var typescript = require("gulp-typescript");
var uglify = require("gulp-uglify");
var tsd = require("gulp-tsd");

var root = __dirname;
var paths = {
    root: root,
    build: root+"/build",
    dist: root+"/dist",
    src: root+"/src"
};

gulp.task("tsd", function(callback){
    tsd({
        "command": "reinstall",
        "latest": true,
        "config": paths.root+"/tsd.json"
    }, callback);
});

gulp.task("compile", function () {
    gulp.src([paths.src+"/**/*.ts"])
        .pipe(typescript({
            target: "es5",
            module: "commonjs",
            removeComments: true            
        }))
        .pipe(gulp.dest(paths.build));
});

gulp.task("release", ["compile"], function (){
    gulp.src([paths.build+"/**/*.js"])
    .pipe(uglify())
    .pipe(gulp.dest(paths.dist)); 
});

gulp.task("run", shell.task("node "+paths.build+"/index.js"));
gulp.task("run-release", shell.task("node "+paths.dist+"/index.js --production"));

gulp.task("build", ["compile"]); 
gulp.task("default", ["build"]);