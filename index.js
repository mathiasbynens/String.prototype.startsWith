/*! https://mths.be/startswith v1.0.0 by @mathias */

'use strict';

var callBind = require('call-bind');
var define = require('define-properties');

var implementation = require('./implementation');
var getPolyfill = require('./polyfill');
var shim = require('./shim');

var boundStartsWith = callBind(getPolyfill());

define(boundStartsWith, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = boundStartsWith;
