(function (angular) {
    'use strict';

    angular.module('pctMoment.service', [])

        .factory('moment', function ($window) {

            if( !$window.hasOwnProperty('moment') ) {
                throw new ReferenceError(
                    'pctMoment: window.moment is undefined, please make sure you\'ve loaded moment.js script tag'
                );

                return;
            }

            return $window.moment;
        });

})(angular);
