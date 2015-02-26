var gulp = require('gulp');
var runSequence = require('run-sequence');
var babel = require('gulp-babel');
var paths = require('../paths');
var compilerOptions = require('../6to5-options');
var assign = Object.assign || require('object.assign');

gulp.task('build-es6', function () {
    return gulp.src(paths.source)
        .pipe(gulp.dest(paths.output + 'es6'));
});

gulp.task('build-commonjs', function () {
    return gulp.src(paths.source)
        .pipe(babel(assign({}, compilerOptions, {modules:'common'})))
        .pipe(gulp.dest(paths.output + 'commonjs'));
});

gulp.task('build-amd', function () {
    return gulp.src(paths.source)
        .pipe(babel(assign({}, compilerOptions, {modules:'amd'})))
        .pipe(gulp.dest(paths.output + 'amd'));
});

gulp.task('build-system', function () {
    return gulp.src(paths.source)
        .pipe(babel(assign({}, compilerOptions, {modules:'system'})))
        .pipe(gulp.dest(paths.output + 'system'));
});

gulp.task('build', function(callback) {
    return runSequence(
        'clean',
        ['build-es6', 'build-commonjs', 'build-amd', 'build-system'],
        callback
    );
});

//var gulp        = require('gulp');
//var sourcemaps  = require('gulp-sourcemaps');
//var concat      = require('gulp-concat');
//var config      = JSON.parse(require('fs').readFileSync('package.json'));
//
//gulp.task('runtime', function() {
//    return gulp.src([traceur.RUNTIME_PATH,config.application.src + '/*.json'])
//        .pipe(gulp.dest(config.application.build));
//});
//
//gulp.task('build', ['runtime'], function(){
//    return gulp.src(config.application.src + '/**/*.js')
//        .pipe(sourcemaps.init())
//        .pipe(traceur({modules:'commonjs'}))
//        .pipe(concat(config.name+'.min.js'))
//        .pipe(sourcemaps.write('.'))
//        .pipe(gulp.dest(config.application.build));
//});