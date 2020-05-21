'use strict';

var startsWith = require('../');
var test = require('tape');

var runTests = require('./tests');

test('as a function', function (t) {
	runTests(startsWith, t);

	t.end();
});
