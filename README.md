pctMoment
=========

[![Build Status](https://travis-ci.org/percona/pctMoment.svg?branch=master)](https://travis-ci.org/percona/pctMoment)
[![Bower version](https://badge.fury.io/bo/pct-moment.svg)](http://badge.fury.io/bo/pct-moment)
[![Coverage Status](https://img.shields.io/coveralls/percona/pctMoment.svg)](https://coveralls.io/r/percona/pctMoment)

Angular.js wrapper for [Moment.js](http://momentjs.com) and potentially for
[moment-timezone.js](http://momentjs.com/timezone).



## Installation

Download it with bower:

```sh
bower install --save pct-moment
```


**pctMoment** allows you to use any version of Moment.js
that is greater than version `2.0`.

Optionally you can also use Moment-timezone.js, 
any version that is greater than `0.2`.

You can use bower or any other means to download whatever Moment.js
and Moment-timezone.js version you want to use (given the above constraints) 
just don't forget to add them to your site.

**pctMoment**'s bower package has this both libs as dependencies,
you can install other versions freely.

### Use with Moment.js
```html
<script src="moment.js"></script>
<script src="pctMoment.js"></script>
```

### Use with Moment.js and Moment-timezone.js
```html
<script src="moment.js"></script>
<script src="moment-timezone.js"></script>
<script src="pctMoment.js"></script>
```
 
### Get an error!
```html
<script src="pctMoment.js"></script>
```
 



## How to use it

This wrapper returns a shortcut for `window.moment`, the same
moment APIs are still there, checkout their [docs](http://momentjs.com)
 

```javascript
//script.js
angular.module('example', ['pctMoment'])

.controller('ExampleController', function (moment) {

    //use momentjs api!

    moment().format();

    moment().startOf('day').fromNow();


    //if you also add moment-timezone.js to your site,
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
- To provide as thin as possible abstraction layer from Moment's API
- To provide a reusable module from which people can build more complex things


## Inspiration

Thanks to all these resources for inspiration and learning:

- https://github.com/VictorQueiroz/ngMoment
- https://github.com/urish/angular-moment


## Contribute

This project uses Gulp, Karma and JSCS (stylechecker).
Use them and contribute!

## Licence

MIT (see LICENCE file)
