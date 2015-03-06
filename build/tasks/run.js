var gulp = require('gulp');
var shell = require('gulp-shell');
var paths = require('../paths');

gulp.task('run', shell.task('node '+paths.output+'index.js'));