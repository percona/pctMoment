describe('pctMoment.service', function () {
    'use strict';

    beforeEach(module('pctMoment.service'));

    describe('when moment.js is present', function () {
        it('should return a reference to window.moment', inject(function (moment) {

            expect(moment).toBeDefined();
        }))
    })


});
