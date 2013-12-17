var assert = require('assert');
var assertEquals = assert.equal;
var assertThrows = assert['throws'];

require('../startswith.js');

assertEquals(String.prototype.startsWith.length, 1);

assertEquals('undefined'.startsWith(), true);
assertEquals('undefined'.startsWith(undefined), true);
assertEquals('undefined'.startsWith(null), false);
assertEquals('null'.startsWith(), false);
assertEquals('null'.startsWith(undefined), false);
assertEquals('null'.startsWith(null), true);

assertEquals('abc'.startsWith(), false);
assertEquals('abc'.startsWith(''), true);
assertEquals('abc'.startsWith('\0'), false);
assertEquals('abc'.startsWith('a'), true);
assertEquals('abc'.startsWith('b'), false);
assertEquals('abc'.startsWith('ab'), true);
assertEquals('abc'.startsWith('bc'), false);
assertEquals('abc'.startsWith('abc'), true);
assertEquals('abc'.startsWith('bcd'), false);
assertEquals('abc'.startsWith('abcd'), false);
assertEquals('abc'.startsWith('bcde'), false);

assertEquals('abc'.startsWith('', NaN), true);
assertEquals('abc'.startsWith('\0', NaN), false);
assertEquals('abc'.startsWith('a', NaN), true);
assertEquals('abc'.startsWith('b', NaN), false);
assertEquals('abc'.startsWith('ab', NaN), true);
assertEquals('abc'.startsWith('bc', NaN), false);
assertEquals('abc'.startsWith('abc', NaN), true);
assertEquals('abc'.startsWith('bcd', NaN), false);
assertEquals('abc'.startsWith('abcd', NaN), false);
assertEquals('abc'.startsWith('bcde', NaN), false);

assertEquals('abc'.startsWith('', false), true);
assertEquals('abc'.startsWith('\0', false), false);
assertEquals('abc'.startsWith('a', false), true);
assertEquals('abc'.startsWith('b', false), false);
assertEquals('abc'.startsWith('ab', false), true);
assertEquals('abc'.startsWith('bc', false), false);
assertEquals('abc'.startsWith('abc', false), true);
assertEquals('abc'.startsWith('bcd', false), false);
assertEquals('abc'.startsWith('abcd', false), false);
assertEquals('abc'.startsWith('bcde', false), false);

assertEquals('abc'.startsWith('', undefined), true);
assertEquals('abc'.startsWith('\0', undefined), false);
assertEquals('abc'.startsWith('a', undefined), true);
assertEquals('abc'.startsWith('b', undefined), false);
assertEquals('abc'.startsWith('ab', undefined), true);
assertEquals('abc'.startsWith('bc', undefined), false);
assertEquals('abc'.startsWith('abc', undefined), true);
assertEquals('abc'.startsWith('bcd', undefined), false);
assertEquals('abc'.startsWith('abcd', undefined), false);
assertEquals('abc'.startsWith('bcde', undefined), false);

assertEquals('abc'.startsWith('', null), true);
assertEquals('abc'.startsWith('\0', null), false);
assertEquals('abc'.startsWith('a', null), true);
assertEquals('abc'.startsWith('b', null), false);
assertEquals('abc'.startsWith('ab', null), true);
assertEquals('abc'.startsWith('bc', null), false);
assertEquals('abc'.startsWith('abc', null), true);
assertEquals('abc'.startsWith('bcd', null), false);
assertEquals('abc'.startsWith('abcd', null), false);
assertEquals('abc'.startsWith('bcde', null), false);

assertEquals('abc'.startsWith('', -Infinity), true);
assertEquals('abc'.startsWith('\0', -Infinity), false);
assertEquals('abc'.startsWith('a', -Infinity), true);
assertEquals('abc'.startsWith('b', -Infinity), false);
assertEquals('abc'.startsWith('ab', -Infinity), true);
assertEquals('abc'.startsWith('bc', -Infinity), false);
assertEquals('abc'.startsWith('abc', -Infinity), true);
assertEquals('abc'.startsWith('bcd', -Infinity), false);
assertEquals('abc'.startsWith('abcd', -Infinity), false);
assertEquals('abc'.startsWith('bcde', -Infinity), false);

assertEquals('abc'.startsWith('', -1), true);
assertEquals('abc'.startsWith('\0', -1), false);
assertEquals('abc'.startsWith('a', -1), true);
assertEquals('abc'.startsWith('b', -1), false);
assertEquals('abc'.startsWith('ab', -1), true);
assertEquals('abc'.startsWith('bc', -1), false);
assertEquals('abc'.startsWith('abc', -1), true);
assertEquals('abc'.startsWith('bcd', -1), false);
assertEquals('abc'.startsWith('abcd', -1), false);
assertEquals('abc'.startsWith('bcde', -1), false);

assertEquals('abc'.startsWith('', -0), true);
assertEquals('abc'.startsWith('\0', -0), false);
assertEquals('abc'.startsWith('a', -0), true);
assertEquals('abc'.startsWith('b', -0), false);
assertEquals('abc'.startsWith('ab', -0), true);
assertEquals('abc'.startsWith('bc', -0), false);
assertEquals('abc'.startsWith('abc', -0), true);
assertEquals('abc'.startsWith('bcd', -0), false);
assertEquals('abc'.startsWith('abcd', -0), false);
assertEquals('abc'.startsWith('bcde', -0), false);

assertEquals('abc'.startsWith('', +0), true);
assertEquals('abc'.startsWith('\0', +0), false);
assertEquals('abc'.startsWith('a', +0), true);
assertEquals('abc'.startsWith('b', +0), false);
assertEquals('abc'.startsWith('ab', +0), true);
assertEquals('abc'.startsWith('bc', +0), false);
assertEquals('abc'.startsWith('abc', +0), true);
assertEquals('abc'.startsWith('bcd', +0), false);
assertEquals('abc'.startsWith('abcd', +0), false);
assertEquals('abc'.startsWith('bcde', +0), false);

assertEquals('abc'.startsWith('', 1), true);
assertEquals('abc'.startsWith('\0', 1), false);
assertEquals('abc'.startsWith('a', 1), false);
assertEquals('abc'.startsWith('b', 1), true);
assertEquals('abc'.startsWith('ab', 1), false);
assertEquals('abc'.startsWith('bc', 1), true);
assertEquals('abc'.startsWith('abc', 1), false);
assertEquals('abc'.startsWith('bcd', 1), false);
assertEquals('abc'.startsWith('abcd', 1), false);
assertEquals('abc'.startsWith('bcde', 1), false);

assertEquals('abc'.startsWith('', +Infinity), true);
assertEquals('abc'.startsWith('\0', +Infinity), false);
assertEquals('abc'.startsWith('a', +Infinity), false);
assertEquals('abc'.startsWith('b', +Infinity), false);
assertEquals('abc'.startsWith('ab', +Infinity), false);
assertEquals('abc'.startsWith('bc', +Infinity), false);
assertEquals('abc'.startsWith('abc', +Infinity), false);
assertEquals('abc'.startsWith('bcd', +Infinity), false);
assertEquals('abc'.startsWith('abcd', +Infinity), false);
assertEquals('abc'.startsWith('bcde', +Infinity), false);

assertEquals('abc'.startsWith('', true), true);
assertEquals('abc'.startsWith('\0', true), false);
assertEquals('abc'.startsWith('a', true), false);
assertEquals('abc'.startsWith('b', true), true);
assertEquals('abc'.startsWith('ab', true), false);
assertEquals('abc'.startsWith('bc', true), true);
assertEquals('abc'.startsWith('abc', true), false);
assertEquals('abc'.startsWith('bcd', true), false);
assertEquals('abc'.startsWith('abcd', true), false);
assertEquals('abc'.startsWith('bcde', true), false);

assertEquals('abc'.startsWith('', 'x'), true);
assertEquals('abc'.startsWith('\0', 'x'), false);
assertEquals('abc'.startsWith('a', 'x'), true);
assertEquals('abc'.startsWith('b', 'x'), false);
assertEquals('abc'.startsWith('ab', 'x'), true);
assertEquals('abc'.startsWith('bc', 'x'), false);
assertEquals('abc'.startsWith('abc', 'x'), true);
assertEquals('abc'.startsWith('bcd', 'x'), false);
assertEquals('abc'.startsWith('abcd', 'x'), false);
assertEquals('abc'.startsWith('bcde', 'x'), false);

assertEquals('[a-z]+(bar)?'.startsWith('[a-z]+'), true);
assertThrows(function() { '[a-z]+(bar)?'.startsWith(/[a-z]+/); }, TypeError);
assertEquals('[a-z]+(bar)?'.startsWith('(bar)?', 6), true);
assertThrows(function() { '[a-z]+(bar)?'.startsWith(/(bar)?/); }, TypeError);
assertThrows(function() { '[a-z]+/(bar)?/'.startsWith(/(bar)?/); }, TypeError);

// http://mathiasbynens.be/notes/javascript-unicode#poo-test
var string = 'I\xF1t\xEBrn\xE2ti\xF4n\xE0liz\xE6ti\xF8n\u2603\uD83D\uDCA9';
assertEquals(string.startsWith(''), true);
assertEquals(string.startsWith('\xF1t\xEBr'), false);
assertEquals(string.startsWith('\xF1t\xEBr', 1), true);
assertEquals(string.startsWith('\xE0liz\xE6'), false);
assertEquals(string.startsWith('\xE0liz\xE6', 11), true);
assertEquals(string.startsWith('\xF8n\u2603\uD83D\uDCA9'), false);
assertEquals(string.startsWith('\xF8n\u2603\uD83D\uDCA9', 18), true);
assertEquals(string.startsWith('\u2603'), false);
assertEquals(string.startsWith('\u2603', 20), true);
assertEquals(string.startsWith('\uD83D\uDCA9'), false);
assertEquals(string.startsWith('\uD83D\uDCA9', 21), true);

assertThrows(function() { String.prototype.startsWith.call(undefined); }, TypeError);
assertThrows(function() { String.prototype.startsWith.call(undefined, 'b'); }, TypeError);
assertThrows(function() { String.prototype.startsWith.call(undefined, 'b', 4); }, TypeError);
assertThrows(function() { String.prototype.startsWith.call(null); }, TypeError);
assertThrows(function() { String.prototype.startsWith.call(null, 'b'); }, TypeError);
assertThrows(function() { String.prototype.startsWith.call(null, 'b', 4); }, TypeError);
assertEquals(String.prototype.startsWith.call(42, '2'), false);
assertEquals(String.prototype.startsWith.call(42, '4'), true);
assertEquals(String.prototype.startsWith.call(42, 'b', 4), false);
assertEquals(String.prototype.startsWith.call(42, '2', 1), true);
assertEquals(String.prototype.startsWith.call(42, '2', 4), false);
assertEquals(String.prototype.startsWith.call({ 'toString': function() { return 'abc'; } }, 'b', 0), false);
assertEquals(String.prototype.startsWith.call({ 'toString': function() { return 'abc'; } }, 'b', 1), true);
assertEquals(String.prototype.startsWith.call({ 'toString': function() { return 'abc'; } }, 'b', 2), false);

assertThrows(function() { String.prototype.startsWith.apply(undefined); }, TypeError);
assertThrows(function() { String.prototype.startsWith.apply(undefined, ['b']); }, TypeError);
assertThrows(function() { String.prototype.startsWith.apply(undefined, ['b', 4]); }, TypeError);
assertThrows(function() { String.prototype.startsWith.apply(null); }, TypeError);
assertThrows(function() { String.prototype.startsWith.apply(null, ['b']); }, TypeError);
assertThrows(function() { String.prototype.startsWith.apply(null, ['b', 4]); }, TypeError);
assertEquals(String.prototype.startsWith.apply(42, ['2']), false);
assertEquals(String.prototype.startsWith.apply(42, ['4']), true);
assertEquals(String.prototype.startsWith.apply(42, ['b', 4]), false);
assertEquals(String.prototype.startsWith.apply(42, ['2', 1]), true);
assertEquals(String.prototype.startsWith.apply(42, ['2', 4]), false);
assertEquals(String.prototype.startsWith.apply({ 'toString': function() { return 'abc'; } }, ['b', 0]), false);
assertEquals(String.prototype.startsWith.apply({ 'toString': function() { return 'abc'; } }, ['b', 1]), true);
assertEquals(String.prototype.startsWith.apply({ 'toString': function() { return 'abc'; } }, ['b', 2]), false);
