(function() {
    'use strict';

    angular.module('pctMoment.isMomentTimezoneLoaded', ['pctMoment.service'])
        .factory('isMomentTimezoneLoaded', factory);



    factory.$inject = ['moment'];

    /**
     * @ngdoc service
     * @name isMomentTimezoneLoaded
     * @description
     * Utility function to check if moment-timezone.js
     * has been loaded or not.
     * It is useful for dependant components that need
     * moment-timezone.js to be loaded in order to work properly.
     *
     * @returns {Boolean}
     */
    function factory(moment) {


        return function isMomentTimezoneLoaded() {
            // Extracted method to detected moment-timezone from
            // it's source
            // https://github.com/moment/moment-timezone/blob/e3eb54c6b0a6ed901d1e331a2f3a6d11295c8d92/moment-timezone.js#L22
            return !!moment.tz;
        };

    }


})();
