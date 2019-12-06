import { DEBUGGING } from './';
const doc: Element = document.documentElement;
const isDevelopment: boolean = process.env.NODE_ENV === 'development';
const ua: string = navigator.userAgent || '';

if (doc) {
	doc.setAttribute('data-useragent', ua);
}
export const getUrlVars: IArrowFunction = (str: string | null | undefined): string[] => {
	let i: number;
	let hash: string[];
	let hashLoc: number;
	let hashSlice: number;
	const vars: string[] = [];
	const urlStr: string = str || window.location.href;
	const hashes: string[] = urlStr.slice(urlStr.indexOf('?') + 1).split('&');
	const hashLen: number = hashes.length;

	for (i = 0; i < hashLen; i++) {
		hashLoc = hashes[i].indexOf('#');
		hashSlice = hashLoc > 0 ? hashLoc : hashes[i].length;
		hash = hashes[i].slice(0, hashSlice).split('=');
		// vars.push(hash[0]);
		vars[hash[0]] = hash[1];
	}
	return vars;
};
export const getUrlVar: IArrowFunction = (name: string, str?: string): string[] => {
	return getUrlVars(str)[name];
};
// IE CONSOLE & DEBUG HACK/FIX
export const DEBUG: boolean = getUrlVar('debug') === 'true' || isDevelopment;

export const startLogger: IArrowFunction = (): void => {
	// disable console if debug !== true and fixes console availability in IE
	/* eslint-disable */
	((a) => {
		function b() {}
		for (
			let c = 'assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,table,time,timestamp,timeEnd,trace,warn'.split(
					',',
				),
				d;
			!!(d = c.pop());

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
					return ((<any>window).console = <Console>{});
				}
			} else {
				return ((<any>window).console = <Console>{});
			}
		})(),
	);

	// Place notification in the output window to indicate debugging and enable jQuery Migrate logging
	if (DEBUG) {
		console.warn('%cIN DEBUG MODE', DEBUGGING);
	}
	/* eslint-enable */
};
