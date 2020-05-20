'use strict';

function fakeArg(fn) {
	return function(st) {
		try {
			Object.prototype[1] = 2; // try to break `arguments[1]`
			fn(st);
		} finally {
			delete Object.prototype[1];
		}
	};
}

module.exports = function(startsWith, t) {
	t.test('"undefined" this string', fakeArg(function(st) {
		st.equal(startsWith('undefined'), true);
		st.equal(startsWith('undefined', undefined), true);
		st.equal(startsWith('undefined', null), false);
		st.end();
	}));
	
	t.test('"null" this string', fakeArg(function(st) {
		st.equal(startsWith('null'), false);
		st.equal(startsWith('null', undefined), false);
		st.equal(startsWith('null', null), true);
		st.end();
	}));

	t.test('Withuot position argument', fakeArg(function(st) {
		st.equal(startsWith('abc'), false);
		st.equal(startsWith('abc', ''), true);
		st.equal(startsWith('abc', '\0'), false);
		st.equal(startsWith('abc', 'a'), true);
		st.equal(startsWith('abc', 'b'), false);
		st.equal(startsWith('abc', 'ab'), true);
		st.equal(startsWith('abc', 'bc'), false);
		st.equal(startsWith('abc', 'abc'), true);
		st.equal(startsWith('abc', 'bcd'), false);
		st.equal(startsWith('abc', 'abcd'), false);
		st.equal(startsWith('abc', 'bcde'), false);
		st.end();
	}));

	t.test('position NaN', fakeArg(function(st) {
		st.equal(startsWith('abc', '', NaN), true);
		st.equal(startsWith('abc', '\0', NaN), false);
		st.equal(startsWith('abc', 'a', NaN), true);
		st.equal(startsWith('abc', 'b', NaN), false);
		st.equal(startsWith('abc', 'ab', NaN), true);
		st.equal(startsWith('abc', 'bc', NaN), false);
		st.equal(startsWith('abc', 'abc', NaN), true);
		st.equal(startsWith('abc', 'bcd', NaN), false);
		st.equal(startsWith('abc', 'abcd', NaN), false);
		st.equal(startsWith('abc', 'bcde', NaN), false);
		st.end();
	}));

	t.test('position false', fakeArg(function(st) {
		st.equal(startsWith('abc', '', false), true);
		st.equal(startsWith('abc', '\0', false), false);
		st.equal(startsWith('abc', 'a', false), true);
		st.equal(startsWith('abc', 'b', false), false);
		st.equal(startsWith('abc', 'ab', false), true);
		st.equal(startsWith('abc', 'bc', false), false);
		st.equal(startsWith('abc', 'abc', false), true);
		st.equal(startsWith('abc', 'bcd', false), false);
		st.equal(startsWith('abc', 'abcd', false), false);
		st.equal(startsWith('abc', 'bcde', false), false);
		st.end();
	}));

	t.test('position undefined', fakeArg(function(st) {
		st.equal(startsWith('abc', '', undefined), true);
		st.equal(startsWith('abc', '\0', undefined), false);
		st.equal(startsWith('abc', 'a', undefined), true);
		st.equal(startsWith('abc', 'b', undefined), false);
		st.equal(startsWith('abc', 'ab', undefined), true);
		st.equal(startsWith('abc', 'bc', undefined), false);
		st.equal(startsWith('abc', 'abc', undefined), true);
		st.equal(startsWith('abc', 'bcd', undefined), false);
		st.equal(startsWith('abc', 'abcd', undefined), false);
		st.equal(startsWith('abc', 'bcde', undefined), false);
		st.end();
	}));

	t.test('position null', fakeArg(function(st) {
		st.equal(startsWith('abc', '', null), true);
		st.equal(startsWith('abc', '\0', null), false);
		st.equal(startsWith('abc', 'a', null), true);
		st.equal(startsWith('abc', 'b', null), false);
		st.equal(startsWith('abc', 'ab', null), true);
		st.equal(startsWith('abc', 'bc', null), false);
		st.equal(startsWith('abc', 'abc', null), true);
		st.equal(startsWith('abc', 'bcd', null), false);
		st.equal(startsWith('abc', 'abcd', null), false);
		st.equal(startsWith('abc', 'bcde', null), false);
		st.end();
	}));

	t.test('position -Infinity', fakeArg(function(st) {
		st.equal(startsWith('abc', '', -Infinity), true);
		st.equal(startsWith('abc', '\0', -Infinity), false);
		st.equal(startsWith('abc', 'a', -Infinity), true);
		st.equal(startsWith('abc', 'b', -Infinity), false);
		st.equal(startsWith('abc', 'ab', -Infinity), true);
		st.equal(startsWith('abc', 'bc', -Infinity), false);
		st.equal(startsWith('abc', 'abc', -Infinity), true);
		st.equal(startsWith('abc', 'bcd', -Infinity), false);
		st.equal(startsWith('abc', 'abcd', -Infinity), false);
		st.equal(startsWith('abc', 'bcde', -Infinity), false);
		st.end();
	}));

	t.test('position -1', fakeArg(function(st) {
		st.equal(startsWith('abc', '', -1), true);
		st.equal(startsWith('abc', '\0', -1), false);
		st.equal(startsWith('abc', 'a', -1), true);
		st.equal(startsWith('abc', 'b', -1), false);
		st.equal(startsWith('abc', 'ab', -1), true);
		st.equal(startsWith('abc', 'bc', -1), false);
		st.equal(startsWith('abc', 'abc', -1), true);
		st.equal(startsWith('abc', 'bcd', -1), false);
		st.equal(startsWith('abc', 'abcd', -1), false);
		st.equal(startsWith('abc', 'bcde', -1), false);
		st.end();
	}));

	t.test('position -0', fakeArg(function(st) {
		st.equal(startsWith('abc', '', -0), true);
		st.equal(startsWith('abc', '\0', -0), false);
		st.equal(startsWith('abc', 'a', -0), true);
		st.equal(startsWith('abc', 'b', -0), false);
		st.equal(startsWith('abc', 'ab', -0), true);
		st.equal(startsWith('abc', 'bc', -0), false);
		st.equal(startsWith('abc', 'abc', -0), true);
		st.equal(startsWith('abc', 'bcd', -0), false);
		st.equal(startsWith('abc', 'abcd', -0), false);
		st.equal(startsWith('abc', 'bcde', -0), false);
		st.end();
	}));

	t.test('position +0', fakeArg(function(st) {
		st.equal(startsWith('abc', '', +0), true);
		st.equal(startsWith('abc', '\0', +0), false);
		st.equal(startsWith('abc', 'a', +0), true);
		st.equal(startsWith('abc', 'b', +0), false);
		st.equal(startsWith('abc', 'ab', +0), true);
		st.equal(startsWith('abc', 'bc', +0), false);
		st.equal(startsWith('abc', 'abc', +0), true);
		st.equal(startsWith('abc', 'bcd', +0), false);
		st.equal(startsWith('abc', 'abcd', +0), false);
		st.equal(startsWith('abc', 'bcde', +0), false);
		st.end();
	}));

	t.test('position 1', fakeArg(function(st) {
		st.equal(startsWith('abc', '', 1), true);
		st.equal(startsWith('abc', '\0', 1), false);
		st.equal(startsWith('abc', 'a', 1), false);
		st.equal(startsWith('abc', 'b', 1), true);
		st.equal(startsWith('abc', 'ab', 1), false);
		st.equal(startsWith('abc', 'bc', 1), true);
		st.equal(startsWith('abc', 'abc', 1), false);
		st.equal(startsWith('abc', 'bcd', 1), false);
		st.equal(startsWith('abc', 'abcd', 1), false);
		st.equal(startsWith('abc', 'bcde', 1), false);
		st.end();
	}));

	t.test('position +Infinity', fakeArg(function(st) {
		st.equal(startsWith('abc', '', +Infinity), true);
		st.equal(startsWith('abc', '\0', +Infinity), false);
		st.equal(startsWith('abc', 'a', +Infinity), false);
		st.equal(startsWith('abc', 'b', +Infinity), false);
		st.equal(startsWith('abc', 'ab', +Infinity), false);
		st.equal(startsWith('abc', 'bc', +Infinity), false);
		st.equal(startsWith('abc', 'abc', +Infinity), false);
		st.equal(startsWith('abc', 'bcd', +Infinity), false);
		st.equal(startsWith('abc', 'abcd', +Infinity), false);
		st.equal(startsWith('abc', 'bcde', +Infinity), false);
		st.end();
	}));

	t.test('position true', fakeArg(function(st) {
		st.equal(startsWith('abc', '', true), true);
		st.equal(startsWith('abc', '\0', true), false);
		st.equal(startsWith('abc', 'a', true), false);
		st.equal(startsWith('abc', 'b', true), true);
		st.equal(startsWith('abc', 'ab', true), false);
		st.equal(startsWith('abc', 'bc', true), true);
		st.equal(startsWith('abc', 'abc', true), false);
		st.equal(startsWith('abc', 'bcd', true), false);
		st.equal(startsWith('abc', 'abcd', true), false);
		st.equal(startsWith('abc', 'bcde', true), false);
		st.end();
	}));

	t.test('position string', fakeArg(function(st) {
		st.equal(startsWith('abc', '', 'x'), true);
		st.equal(startsWith('abc', '\0', 'x'), false);
		st.equal(startsWith('abc', 'a', 'x'), true);
		st.equal(startsWith('abc', 'b', 'x'), false);
		st.equal(startsWith('abc', 'ab', 'x'), true);
		st.equal(startsWith('abc', 'bc', 'x'), false);
		st.equal(startsWith('abc', 'abc', 'x'), true);
		st.equal(startsWith('abc', 'bcd', 'x'), false);
		st.equal(startsWith('abc', 'abcd', 'x'), false);
		st.equal(startsWith('abc', 'bcde', 'x'), false);
		st.end();
	}));

	t.test('RegExp search string', fakeArg(function(st) {
		st.equal(startsWith('[a-z]+(bar)?', '[a-z]+'), true);
		st['throws'](function() { startsWith('[a-z]+(bar)?', /[a-z]+/); }, TypeError);
		st.equal(startsWith('[a-z]+(bar)?', '(bar)?', 6), true);
		st['throws'](function() { startsWith('[a-z]+(bar)?', /(bar)?/); }, TypeError);
		st['throws'](function() { startsWith('[a-z]+/(bar)?/', /(bar)?/); }, TypeError);
		st.end();
	}));

	t.test('Surrogate pairs', fakeArg(function(st) {
		// https://mathiasbynens.be/notes/javascript-unicode#poo-test
		var string = 'I\xF1t\xEBrn\xE2ti\xF4n\xE0liz\xE6ti\xF8n\u2603\uD83D\uDCA9';
		st.equal(startsWith(string, ''), true);
		st.equal(startsWith(string, '\xF1t\xEBr'), false);
		st.equal(startsWith(string, '\xF1t\xEBr', 1), true);
		st.equal(startsWith(string, '\xE0liz\xE6'), false);
		st.equal(startsWith(string, '\xE0liz\xE6', 11), true);
		st.equal(startsWith(string, '\xF8n\u2603\uD83D\uDCA9'), false);
		st.equal(startsWith(string, '\xF8n\u2603\uD83D\uDCA9', 18), true);
		st.equal(startsWith(string, '\u2603'), false);
		st.equal(startsWith(string, '\u2603', 20), true);
		st.equal(startsWith(string, '\uD83D\uDCA9'), false);
		st.equal(startsWith(string, '\uD83D\uDCA9', 21), true);
		st.end();
	}));

	t.test('nullish this object', fakeArg(function(st) {
		st['throws'](function() { startsWith(undefined); }, TypeError);
		st['throws'](function() { startsWith(undefined, 'b'); }, TypeError);
		st['throws'](function() { startsWith(undefined, 'b', 4); }, TypeError);
		st['throws'](function() { startsWith(null); }, TypeError);
		st['throws'](function() { startsWith(null, 'b'); }, TypeError);
		st['throws'](function() { startsWith(null, 'b', 4); }, TypeError);
		st.end();
	}));

	t.test('cast this object', fakeArg(function(st) {
		st.equal(startsWith(42, '2'), false);
		st.equal(startsWith(42, '4'), true);
		st.equal(startsWith(42, 'b', 4), false);
		st.equal(startsWith(42, '2', 1), true);
		st.equal(startsWith(42, '2', 4), false);
		st.equal(startsWith({ 'toString': function() { return 'abc'; } }, 'b', 0), false);
		st.equal(startsWith({ 'toString': function() { return 'abc'; } }, 'b', 1), true);
		st.equal(startsWith({ 'toString': function() { return 'abc'; } }, 'b', 2), false);
		st['throws'](function() { startsWith({ 'toString': function() { throw RangeError(); } }, /./); }, RangeError);
		st['throws'](function() { startsWith({ 'toString': function() { return 'abc'; } }, /./); }, TypeError);
		st.end();
	}));
};
