(function(angular) {
    'use strict';

    angular.module('pctMoment.service', [])
        .factory('moment', momentService);




    /**
     *  @ngdoc service
     *  @name moment
     *
     *  @description
     *  Wrapper for [Moment.js](http://momentjs.com) and potentially for
     *  [moment-timezone.js](http://momentjs.com/timezone).
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
     *
     *  @example
        <example module="pctMoment">
        <file name="script.js">
            angular.module('example', ['pctMoment'])
            .controller('ExampleController', function (moment) {

                //use momentjs api!

                moment().format();

                moment().startOf('day').fromNow();


                //if you also add moment-timezon.js to your site,
                //then you can use its API too!

                moment.tz("2014-06-01 12:00", "America/New_York");

                //don't forget to load the Time Zones data when
                //using moment-timezones!


            });
        </file>
       </example>
     *
     * <hr />
     *
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
