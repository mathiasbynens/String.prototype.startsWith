'use strict';

var startsWith = require('../');
startsWith.shim();

var test = require('tape');
var defineProperties = require('define-properties');
var callBind = require('call-bind');
var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = require('functions-have-names')();

var runTests = require('./tests');

test('shimmed', function (t) {
	t.equal(String.prototype.startsWith.length, 1, 'String#startsWith has a length of 1');

	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal(String.prototype.startsWith.name, 'startsWith', 'String#startsWith has name "startsWith"');
		st.end();
	});

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (st) {
		st.equal(false, isEnumerable.call(String.prototype, 'startsWith'), 'String#startsWith is not enumerable');
		st.end();
	});

	runTests(callBind(String.prototype.startsWith), t);

	t.end();
});
