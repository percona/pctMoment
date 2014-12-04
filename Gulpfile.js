var gulp = require('gulp');
var karma = require('karma').server;
var jscs = require('gulp-jscs');

/**
 *   Run test once and exit
 */
gulp.task('test', function(done) {
    karma.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done);
});


/**
 *
 * Run jscs (Javascript Code Style checker)
 * over all the js files.
 *
 * Checkout .jscsrc for config parameteres
 *
 */
gulp.task('jscs', function() {
    return gulp.src([
            'src/**/*.js',
            'Gulpfile.js',
            'karma.conf.js'
        ])
        .pipe(jscs());
});



/*
 *
 * Continuous Integration service default task
 *
 *
 */
gulp.task('continuous', [
        'test',
        'jscs'
    ]);

gulp.task('default', []);
