describe('pctMoment.service', function () {
    'use strict';


    describe('when moment.js is present', function () {
        beforeEach(module('pctMoment.service'));

        it('should return a reference to window.moment', inject(function (moment) {

            expect(moment).toBeDefined();
            expect(moment).toBe(window.moment);
        }))
    });
});
