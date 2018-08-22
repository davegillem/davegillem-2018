const debugLogStyle: string = 'color:#fff; font-weight:bold; background:#845100; padding:5px;';
const doc = document.documentElement;
const isDevelopment: boolean = process.env.NODE_ENV === 'development';

doc.setAttribute('data-useragent', navigator.userAgent);
export const getUrlVars = (str: string | null | undefined) => {
	let i: number, hash: string[], hashLoc: number, hashSlice: number;
	const vars: string[] = [],
		urlStr: string = str || window.location.href,
		hashes: string[] = urlStr.slice(urlStr.indexOf('?') + 1).split('&'),
		hashLen: number = hashes.length;

	for (i = 0; i < hashLen; i++) {
		hashLoc = hashes[i].indexOf('#');
		hashSlice = hashLoc > 0 ? hashLoc : hashes[i].length;
		hash = hashes[i].slice(0, hashSlice).split('=');
		// vars.push(hash[0]);
		vars[hash[0]] = hash[1];
	}
	return vars;
};
export const getUrlVar = (name: string, str?: string) => {
	return getUrlVars(str)[name];
};
// IE CONSOLE & DEBUG HACK/FIX
export const DEBUG: boolean = getUrlVar('debug') === 'true' || isDevelopment;

export const startLogger = () => {
	// disable console if debug !== true and fixes console availability in IE
	(a => {
		function b() {} // tslint:disable-line
		for (
			let c = 'assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,table,time,timestamp,timeEnd,trace,warn'.split(
					','
				),
				d;
			!!(d = c.pop()); // tslint:disable-line

		) {
			a[d] = a[d] || b;
		}
	})(
		(() => {
			if (DEBUG) {
				try {
					console.log();
					if (window.console.group) {
						window.console.group = window.console.groupCollapsed;
					}
					return window.console;
				} catch (a) {
					return ((<any>window).console = <Console>{}); // tslint:disable-line
				}
			} else {
				return ((<any>window).console = <Console>{}); // tslint:disable-line
			}
		})()
	);

	// Place notification in the output window to indicate debugging and enable jQuery Migrate logging
	if (DEBUG) {
		console.warn('%cIN DEBUG MODE', debugLogStyle);
	}
};
