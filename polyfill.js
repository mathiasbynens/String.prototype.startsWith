/*! https://mths.be/startswith v1.0.0 by @mathias */

'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	return String.prototype.startsWith || implementation;
};
