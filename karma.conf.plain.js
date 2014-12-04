/*
 * Karma conf for plain, not compiled sourcers
 *
 *
 */

module.exports = function(config) {
    config.set({
        browsers: ['PhantomJS'],
        frameworks: ['jasmine'],

        // coverage reporter generates the coverage
        reporters: ['progress', 'coverage'],

        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            'src/**/!(*.spec).js': ['coverage']
        },



        files: [
            // Libs
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/moment/moment.js',
            'bower_components/moment-timezone/builds/moment-timezone-with-data-2010-2020.js',

            // Source files
            'src/**/!(*.spec).js',

            // Test files
            'src/**/*.spec.js'
        ]
    });
};
