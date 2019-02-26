import * as LogStyle from 'utilities';

const dataCache: {} = {};
const $htmlElement: HTMLElement = document.getElementsByTagName('html')[0];
export const BASE_API_PATH: string = 'data/'; // 'http://davegillem.com/data/'; // 'http://api.davegillem.com/wp-json/wp/v2/';
export const DEFAULT_HEADERS: IFetchHeader = {
	'Content-Type': 'application/json; charset=utf-8;',
};

/**
 * Builds the actual endpoint string by replacing variable placeholders in the passed in endpoint with matching key/value found
 * in the params object (if found). Vraiables are indicated by the {variable} portion of the endpoint string (when applicable).
 * The query string is created based on the map provided, treating each key as a query parameter name,
 * and each value as the query parameter value. This performs URI encoding as needed for the parameter values
 * @param endpoint string to be used as the endpoint starting point
 * @param params object that contains key value pairs
 * @param buildQueryString boolean to indicate if the quesry string should be attached to the new endpoint string
 */
const buildEndpoint: IArrowFunction = (endpoint: string, params: IKeyValuePair, buildQueryString?: boolean): string => {
	let apiCall: string = endpoint;
	const result: string[] = [];
	Object.keys(params).map((key: string) => {
		const propVar: string = `{${key}}`;
		const hasVar: boolean = apiCall.indexOf(propVar) >= 0;
		apiCall = apiCall.replace(propVar, encodeURIComponent(params[key]));
		if (hasVar) {
			delete params[key];
		} else if (buildQueryString) {
			result.push(`${key}=${encodeURIComponent(params[key])}`);
		}
	});
	if (result.length) {
		apiCall = `${apiCall}?${result.join('&')}`;
	}
	return apiCall;
};

/**
 * Takes the data passed in and makes an AJAX call. The return is then converted to JSON and passed back to the originating callee
 * A query string is constructed from the data object as needed. Dynamic API parameter replacement is also handled using the data object and endpoint
 * @param api an object that contains the endpoint, method, and headers to be used for the fetch call
 * @param data object that contains the data to be passed along with the API call
 * @param cacheRef a string to indicate what key should be used if the data returned should be cached for future access
 */
export const getData: IArrowFunction = (
	api: IDataMethod,
	data: IKeyValuePair = {},
	cacheRef?: string | null | undefined
): Promise<IPromise> => {
	const { headers, method }: { headers: IFetchHeader; method: string } = api;
	const hasBody: boolean = method === 'GET' || method === 'DELETE';
	const endpoint: string = buildEndpoint(api.endpoint, data, hasBody);
	console.group(`%c${method} - ${api.endpoint} `, LogStyle.API);
	console.log('CALLING - ', endpoint);
	console.log('PASSING - ', data);
	console.groupEnd();
	$htmlElement.classList.add('datalLoading');
	if (cacheRef && dataCache[cacheRef]) {
		return dataCache[cacheRef];
	}

	return fetch(endpoint, {
		body: hasBody ? undefined : JSON.stringify(data),
		cache: 'no-cache',
		headers: headers,
		method: method,
	}).then((response: IPromiseResponse) => {
		$htmlElement.classList.remove('datalLoading');
		console.group(`\t%cRESPONSE FOR : ${api.endpoint}`, LogStyle.SUCCESS);
		console.log(`\tDATA FOR ${api.endpoint} : `, response || 'API RETURNS NO DATA HERE');
		console.groupEnd();
		if (cacheRef) {
			dataCache[cacheRef] = response;
		}
		return response;
	});
};
/**
 * Constructs the default API object used in the API call variables
 * @param endpoint string to be used as the endpoint for making the API call
 * @param optional object that contains key value pairs to override the default method and headers that should be used in the api call
 */
export const getApiCall: IArrowFunction = (endpoint: string, optional: IKeyValuePair = {}): IDataMethod => {
	return {
		endpoint: endpoint,
		headers: optional.headers || DEFAULT_HEADERS,
		method: optional.method || 'GET',
	};
};

/**
 * Returns the cached data returned previous from an API called that was stored using the cacheRef name
 * @param cacheRef a string reference to the data that was cached in a previous call made to getData
 */
export const checkCache: IArrowFunction = (cacheRef: string): {} => {
	if (dataCache[cacheRef]) {
		const cachedData: {} = dataCache[cacheRef];
		console.group(`%c${cacheRef} - %cCACHED DATA `, LogStyle.API, LogStyle.CACHED);
		console.log('%cRESPONSE : ', LogStyle.PARAM, cachedData);
		console.groupEnd();
	}
	return dataCache;
};
/**
 * Updates the cached data returned previous from an API called that was stored using the cacheRef name
 * @param cacheRef a string reference to the data that was cached in a previous call made to getData
 */
export const updateCache: IArrowFunction = (cacheRef: string, data: {}): void => {
	dataCache[cacheRef] = data;
};
/**
 * Removes the cached data returned previous from an API called that was stored using the cacheRef name
 * @param cacheRef a string reference to the data that was cached in a previous call made to getData
 */
export const removeCache: IArrowFunction = (cacheRef: string): void => {
	delete dataCache[cacheRef];
};
