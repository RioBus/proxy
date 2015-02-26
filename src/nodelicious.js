require('traceur').require.makeDefault(function(filename) {
    // don't transpile our dependencies, just our app
    return filename.indexOf('node_modules') === -1;
});
require('./App').App.main(JSON.parse(require('fs').readFileSync('src/config.json')));