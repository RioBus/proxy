var gutil = require('gulp-util');

module.exports = function(gulp, plugins, paths){
    gulp.src([paths.build+"/**/*.js"])
    .pipe(plugins.uglify().on('error', gutil.log))
    .pipe(gulp.dest(paths.dist));
};