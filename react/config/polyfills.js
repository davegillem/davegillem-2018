// IE11 polyfills
import 'core-js/fn/string/includes';
import 'core-js/fn/object/assign';
import 'core-js/fn/object/values';
import 'core-js/fn/array/includes';
import 'core-js/fn/array/for-each';
import 'core-js/fn/array/find';

if (typeof Promise === 'undefined') {
	// Rejection tracking prevents a common issue where React gets into an
	// inconsistent state due to an error, but it gets swallowed by a Promise,
	// and the user has no idea what causes React's erratic future behavior.
	require('promise/lib/rejection-tracking')
		.enable();
	window.Promise = require('promise/lib/es6-extensions.js');
}

// fetch() polyfill for making API calls.
require('whatwg-fetch');

// Object.assign() is commonly used with React.
// It will use the native implementation if it's present and isn't buggy.
Object.assign = require('object-assign');

// In tests, polyfill requestAnimationFrame since jsdom doesn't provide it yet.
// We don't polyfill it in the browser--this is user's responsibility.
if (process.env.NODE_ENV === 'test') {
	// tslint:disable-line
	require('raf')
		.polyfill(global);
}

// Polufill for IE11 forEach.
// this does not exist in core-js polyfills
// https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Polyfill
if (window.NodeList && !NodeList.prototype.forEach) {
	console.info('polyfill for IE11');
	NodeList.prototype.forEach = function(callback, thisArg) {
		NodeList.prototype.forEach = Array.prototype.forEach; // below could be reduced to just this line.
		// let thisArg2 = thisArg || window;						// keep this incase the above does not work
		// for (var i = 0; i < this.length; i++) {
		// 	callback.call(thisArg2, this[i], i, this);
		// }
	};
}
