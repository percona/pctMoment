pctMoment
=========

Angular.js wrapper for [Moment.js](http://momentjs.com) and potentially for
[moment-timezone.js](http://momentjs.com/timezone).


## How to use it


```javascript
//script.js
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
```


For more documentation check inline docs (we are still working on
auto generating the docs).


## Motivation

While there are other Angular.js wrappers for Moment.js,
they are all too full of filters, services, directives that
we are not interested in right now.

These are the motivations for creating yet another Angular.js Moment.js wrapper:

- Wrap Moment.js the Angular way (no globals)
- No additional filters, directives or services (we might add support for TimeZone format, but that's it!)
- Not tied to any Moment.js version.
- Not tied to any Moment-timezone version.
- Motivate good practices
- To provide a as thing as possible abstraction layer from Moment's API


## Licence

MIT (see LICENCE file)
