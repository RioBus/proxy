var gulp        = require('gulp');
var nodemon     = require('gulp-nodemon');
var sourcemaps  = require('gulp-sourcemaps');
var traceur     = require('gulp-traceur');
var concat      = require('gulp-concat');
var FileSystem  = require('fs');
var config      = JSON.parse(FileSystem.readFileSync('package.json'));

gulp.task('default', ['build'], function() {
  // place code for your default task here
});

gulp.task('build', function(){
    return gulp.src([
            traceur.RUNTIME_PATH,
            config.application.src + '/**/*.js'
        ])
        .pipe(sourcemaps.init())
        .pipe(traceur())
        .pipe(concat(config.name+'.min.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.application.build))
        .pipe(gulp.src(config.application.src + '/*.json').pipe(gulp.dest(config.application.build)));
});

gulp.task('serve', ['build'], function(){
    nodemon({
        script: config.application.build + '/' + config.name + '.min.js',
        ext: 'js'
    })
    .on('restart', function () {
        console.log('restarting application...');
    });
});