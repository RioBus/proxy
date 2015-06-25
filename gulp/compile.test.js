module.exports = function(gulp, plugins, paths){
    gulp.src([paths.test+"/**/*.ts"])
        .pipe(plugins.typescript({
            target: "es5",
            module: "commonjs",
            removeComments: true
        }))
        .pipe(gulp.dest(paths.buildTest));
};