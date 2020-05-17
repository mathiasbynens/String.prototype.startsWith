/*! https://mths.be/startswith v1.0.0 by @mathias */

'use strict';

var define = require('define-properties');

var getPolyfill = require('./polyfill');

module.exports = function shimStartsWith() {
	var polyfill = getPolyfill();

	if (String.prototype.startsWith !== polyfill) {
		define(String.prototype, { startsWith: polyfill });
	}

	return polyfill;
}
