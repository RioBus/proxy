var gulp = require ("gulp");
var shell = require('gulp-shell');
var typescript = require ("gulp-typescript");
var uglify = require ("gulp-uglify");

gulp.task("compile", function () {
    gulp.src(["./src/**/*.ts"])
        .pipe(typescript({
            target: "es5",
            module: "commonjs",
            removeComments: true            
        }))
        .pipe(gulp.dest("./build"));
});

gulp.task("release", ["typescript"], function (){
    gulp.src(["./build/**/*.js"])
    .pipe(uglify())
    .pipe(gulp.dest("./dist/")); 
});

gulp.task('run', shell.task('node build/index.js'));
gulp.task('run:release', shell.task('node dist/index.js --production'));
 
gulp.task("build:dev", ["compile"]);
gulp.task("build:release", ["release"]); 
gulp.task("default", ["compile"]);
