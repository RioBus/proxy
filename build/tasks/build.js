var gulp = require('gulp');
var runSequence = require('run-sequence');
var babel = require('gulp-babel');
var paths = require('../paths');
var compilerOptions = require('../6to5-options');
var assign = Object.assign || require('object.assign');
var uglify = require('gulp-uglify');

gulp.task('build-source', function () {
    return gulp.src(paths.source)
        .pipe(babel(assign({}, compilerOptions, {modules:'common'}))) // modules can also be 'es6', 'amd' or 'system'
        .pipe(uglify())
        .pipe(gulp.dest(paths.output));
});

gulp.task('build', function(callback) {
    return runSequence(
        'clean',
        ['build-source'],
        callback
    );
});