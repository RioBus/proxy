var gulp = require('gulp');

gulp.task('default', function() {
    console.log();
    console.log("Use one of the following commands:");
    console.log("\tgulp build\t build the application");
    console.log("\tgulp run\t run the application (may need Administrator permission)");
    console.log("\tgulp clean\t to remove the last build and perform a clean build");
    console.log();
} );