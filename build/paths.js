var appRoot = 'src/';

module.exports = {
    root: appRoot,
    source: appRoot + '**/*.js',
    output: 'dist/',
    doc:'./doc',
    e2eSpecsSrc: 'test/e2e/src/*.js',
    e2eSpecsDist: 'test/e2e/dist/'
};