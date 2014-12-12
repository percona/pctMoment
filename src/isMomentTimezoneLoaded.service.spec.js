describe('pctMoment.isMomentTimezoneLoaded', function() {
    'use strict';

    var isLoaded;

    beforeEach(module('pctMoment.isMomentTimezoneLoaded'));



    describe('when moment-timezone is loaded', function() {
        // Mock moment.tz
        beforeEach(module(function($provide) {

            $provide.value('moment', {
                tz: function() {}
            });

        }));

        beforeEach(inject(function($injector) {
            isLoaded = $injector.get('isMomentTimezoneLoaded');
        }));

        it('should return true', function() {
            expect(isLoaded()).toBe(true);
        });

    });

    describe('when moment-timezone is not loaded', function() {
        // Mock moment.tz
        beforeEach(module(function($provide) {

            $provide.value('moment', {
                tz: undefined
            });

        }));

        beforeEach(inject(function($injector) {
            isLoaded = $injector.get('isMomentTimezoneLoaded');
        }));

        it('should return false', function() {
            expect(isLoaded()).toBe(false);
        });

    });

});
