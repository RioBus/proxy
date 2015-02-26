var config  = JSON.parse(require('fs').readFileSync('package.json'));
var gulp    = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('serve', function(){
    nodemon({
        script: config.application.src + '/' + config.name + '.js',
        ext: 'js json'
    })
    .on('restart', function () {
        console.log('Restarting application...');
    });
});