var gulp = require('gulp');
var karma = require('karma').server;
var jscs = require('gulp-jscs');



/*
 * Src and important locations
 */
var DIR = {
    src: 'src/**/*!(.spec).js',
    test: 'src/**/*.spec.js',
    karma: 'karma.conf.js',
    gulp: 'Gulpfile.js',

    dist: 'dist/'
};

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
            DIR.src,
            DIR.test,
            DIR.gulp,
            DIR.karma
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
