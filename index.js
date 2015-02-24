var traceur     = require('traceur');
var FileSystem  = require('fs');

traceur.require.makeDefault(function(filename) {
    // don't transpile our dependencies, just our app
    return filename.indexOf('node_modules') === -1;
});

var App = require('./src/app').App;
App.main(JSON.parse(FileSystem.readFileSync('src/config.json')));