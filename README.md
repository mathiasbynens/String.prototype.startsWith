# ES6 `String.prototype.startsWith` polyfill [![Build status](https://travis-ci.org/mathiasbynens/String.prototype.startsWith.png?branch=master)](https://travis-ci.org/mathiasbynens/String.prototype.startsWith)

A robust & optimized ES3-compatible polyfill for [the `String.prototype.startsWith` method in ECMAScript 6](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.startswith).

Other polyfills for `String.prototype.startsWith` are available:

* <https://github.com/paulmillr/es6-shim/blob/4322eae20b6f8a7769fa1d89ac207ef8ee9e1ee4/es6-shim.js#L148-L154> by [Paul Miller](http://paulmillr.com/) ([fails 3 tests](https://github.com/paulmillr/es6-shim/issues/167))
* <https://github.com/google/traceur-compiler/blob/b9b6c1ad7837c6f156213f690c05374604767fac/src/runtime/runtime.js#L52-L54> by Google (~~[fails a lot of tests](https://github.com/google/traceur-compiler/pull/554)~~ now uses this polyfill and passes all tests)

## Installation

In a browser:

```html
<script src="startswith.js"></script>
```

Via [npm](http://npmjs.org/):

```bash
npm install string.prototype.startswith
```

Then, in [Node.js](http://nodejs.org/):

```js
require('string.prototype.startswith');

// On Windows and on Mac systems with default settings, case doesn’t matter,
// which allows you to do this instead:
require('String.prototype.startsWith');
```

## Author

| [![twitter/mathias](http://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](http://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](http://mathiasbynens.be/) |

## License

This polyfill is available under the [MIT](http://mths.be/mit) license.
