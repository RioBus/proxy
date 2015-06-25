module.exports = function(gulp, plugins, paths){
    gulp.src([paths.build+"/**/*.js"])
    .pipe(plugins.uglify())
    .pipe(gulp.dest(paths.dist));
};