var config      = JSON.parse(require('fs').readFileSync('package.json'));
var gulp        = require('gulp');
var nodemon     = require('gulp-nodemon');
//var sourcemaps  = require('gulp-sourcemaps');
//var traceur     = require('gulp-traceur');
//var concat      = require('gulp-concat');

gulp.task('default', ['serve'], function() {} );

//gulp.task('runtime', function() {
//    return gulp.src([traceur.RUNTIME_PATH,config.application.src + '/*.json'])
//        .pipe(gulp.dest(config.application.build));
//});

//gulp.task('build', ['runtime'], function(){
//    return gulp.src(config.application.src + '/**/*.js')
//        .pipe(sourcemaps.init())
//        .pipe(traceur({modules:'commonjs'}))
//        .pipe(concat(config.name+'.min.js'))
//        .pipe(sourcemaps.write('.'))
//        .pipe(gulp.dest(config.application.build));
//});

gulp.task('serve', function(){
    nodemon({
        script: config.application.src + '/' + config.name + '.js',
        ext: 'js json'
    })
    .on('restart', function () {
        console.log('Restarting application...');
    });
});