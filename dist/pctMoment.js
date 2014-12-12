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

(function(angular) {
    'use strict';

    /*
     * @ngdoc module
     * @name pctMoment
     * @description
     *
     * Wrapper for [Moment.js](http://momentjs.com) and potentially for
     * [moment-timezone.js](http://momentjs.com/timezone).
     *
     * Checkout detailed docs in `main.service.js`
     *
     *
     */
    angular.module('pctMoment', [
        'pctMoment.service',
        'pctMoment.isMomentTimezoneLoaded'
    ]);

}) (angular);

(function(angular) {
    'use strict';

    angular.module('pctMoment.service', [])
        .factory('moment', momentService);


    // Explicitly inject services
    momentService.$inject = ['$window'];

    /**
     *  @ngdoc service
     *  @name moment
     *
     *  @description
     *  Wrapper for [Moment.js](http://momentjs.com) and potentially for
     *  [moment-timezone.js](http://momentjs.com/timezone).
     *
     *  The objective of this service is to hide `window.moment` under
     *  an angular service which potentially can be mocked and
     *  thus improving testability and integration.
     *
     *  This wrapper returns a shortcut for `window.moment`, the same
     *  moment APIs are still there, checkout their [docs](http://momentjs.com)
     *
     *  Nevertheless, the general recommendation is to use the [Javascript
     *  Native Date api](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
     *  while possible but for Time Zone manipulation
     *  and some other edge cases then you can use Moment.js
     *
     *  There is an emerging [I18n Native API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)
     *  and its supporting standard that
     *  is slowly starting to catch on, and the plan is to use that when
     *  we are ok with the browser support.
     *
     *
     *  @requires $window
     */
    function momentService($window) {

        if (!$window.hasOwnProperty('moment')) {
            throw new ReferenceError(
                'pctMoment: window.moment is undefined, please make sure you\'ve loaded moment.js script tag'
            );

            return;
        }

        return $window.moment;
    }


})(angular);
