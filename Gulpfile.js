var gulp = require('gulp');
var karma = require('karma').server;
var Dgeni = require('dgeni');

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
    karma.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done);
});



gulp.task('docs', function () {
    var dgeni = new Dgeni([require('./docs/dgeni-conf')]);
    return dgeni.generate();
});


gulp.task('continuous', ['test']);

gulp.task('default', []);
