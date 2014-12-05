var gulp = require('gulp');
var karma = require('karma').server;
var del = require('del');

//Load automatically all gulp plugins and access them
//as attributes of `$` variable
var $ = require('gulp-load-plugins')();


/*
 * Src and important locations
 */
var DIR = {
    src: 'src/**/!(*.spec).js',
    test: 'src/**/*.spec.js',
    karma:{
        plain: 'karma.conf.plain.js',
        minified: 'karma.conf.minified.js'
    },
    gulp: 'Gulpfile.js',

    dist: 'dist/'
};




/**
 *
 * Run karma tests over the plain raw source
 *
 */
gulp.task('test:plain', function(done) {
    karma.start({
        configFile: __dirname + '/' + DIR.karma.plain,
        singleRun: true
    }, done);
});



/**
 *
 * Run karma tests over the concatenated minified source
 *
 */
gulp.task('test:minified', ['dist'], function(done) {
    karma.start({
        configFile: __dirname + '/' + DIR.karma.minified,
        singleRun: true
    }, done);
});



/**
 *
 * Run jscs (Javascript Code Style checker)
 * over all the js files.
 *
 * Checkout .jscsrc for config parameters
 *
 */
gulp.task('jscs', function() {
    return gulp.src([
            DIR.src,
            DIR.test,
            DIR.gulp,
            DIR.karma.plain,
            DIR.karma.minified
        ])
        .pipe($.jscs());
});


/*
 *
 * Continuous Integration service default task
 *
 *
 */
gulp.task('continuous', [
        'test:plain',
        'test:minified',
        'jscs'
    ]);



/*
 * Build pctMoment.js and pctMoment.min.js
 *
 * Respectively, these files are the concatenated
 * version of the lib and the minified version
 *
 */
gulp.task('dist', ['clean:dist'], function() {
    return gulp.src(DIR.src)
        .pipe($.concat('pctMoment.js'))
        .pipe(gulp.dest(DIR.dist))
        .pipe($.uglify())
        .pipe($.rename('pctMoment.min.js'))
        .pipe(gulp.dest(DIR.dist));
});




/*
 * Clean the dist directory (where the built files are located)
 */
gulp.task('clean:dist', function(cb) {
    del([DIR.dist + '*'], cb);
});


gulp.task('default', []);
