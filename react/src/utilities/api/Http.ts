import * as LogStyle from 'utilities';
import { checkHTTPStatus } from './StatusCodes';

const dataCache: any = {};
const $htmlElement: HTMLElement = document.getElementsByTagName('html')[0];
export const BASE_API_PATH = 'http://api.davegillem.com/wp-json/wp/v2/';
export const DEFAULT_HEADERS: IFetchHeader = {
	'Content-Type': 'application/json; charset=utf-8;'
};

export const getApiHeaders = (headers: IFetchHeader = {}): IFetchHeader => {
	return Object.assign({}, DEFAULT_HEADERS, headers);
};

/**
 * Constructs the default API object used in the API call variables
 * @param endpoint string to be used as the endpoint for making the API call
 * @param optional object that contains key value pairs to override the default method and headers that should be used in the api call
 */
export const getApiCall = (endpoint: string, optional: any = {}): IDataMethod => {
	return {
		endpoint: endpoint,
		headers: getApiHeaders(optional.headers) || DEFAULT_HEADERS,
		method: optional.method || 'GET'
	};
};

/**
 * Converts the successful return to JSON format prior to returning back to the callee
 * If there is no content present in the response the original response object is returned for the callee to check the status
 * NOTE: this may need to be expanded with further statuses
 * @param response a response object returned from the getData fetch call
 */
export const parseJSON = (response: Response) => {
	if (checkHTTPStatus(response.status).empty) {
		return response;
	} else {
		return response.json();
	}
};

/**
 * Checks to make sure the return object was a success prior to passing it back to the callee
 * @param response a response object returned from the getData fetch call
 */
const checkStatus = (response: Response) => {
	if (response.ok) {
		const respType = response.headers.get('content-type');
		if (respType && (respType.includes('application/json') || respType.includes('application/scim+json'))) {
			return response;
		} else {
			if (checkHTTPStatus(response.status).empty) {
				return response;
			} else {
				throw new TypeError("Oops, we haven't got JSON!");
			}
		}
	} else {
		if (checkHTTPStatus(response.status).forbidden) {
			window.location.href = '/login';
		}
		throw new Error(response.statusText);
	}
};
/**
 * Takes the data passed in and makes an AJAX call. The return is then converted to JSON and passed back to the originating callee
 * A query string is constructed from the data object as needed. Dynamic API parameter replacement is also handled using the data object and endpoint
 * @param api an object that contains the endpoint, method, and headers to be used for the fetch call
 * @param data object that contains the data to be passed along with the API call
 * @param cacheRef a string to indicate what key should be used if the data returned should be cached for future access
 */
export const getData = (api: IDataMethod, data: IKeyValuePair = {}, cacheRef?: string): Promise<any> => {
	const { headers, method } = api;
	const hasBody: boolean = method === 'GET' || method === 'DELETE';
	const endpoint: string = buildEndpoint(api.endpoint, data, hasBody);
	console.group('%c' + method + ' - ' + api.endpoint + ' ', LogStyle.API);
	console.log('CALLING - ', endpoint);
	console.log('PASSING - ', data);
	console.groupEnd();
	$htmlElement.classList.add('dataLoading');
	if (cacheRef && dataCache[cacheRef]) {
		return dataCache[cacheRef];
	}

	return fetch(endpoint, {
		body: hasBody ? null : JSON.stringify(data),
		cache: 'no-cache',
		headers: headers,
		method: method
	})
		.then(checkStatus)
		.then(parseJSON)
		.then(response => {
			$htmlElement.classList.remove('dataLoading');
			console.group('\t%cRESPONSE FOR : ' + api.endpoint, LogStyle.SUCCESS);
			console.log('\tDATA FOR ' + api.endpoint + ' : ', response || 'API RETURNS NO DATA HERE');
			console.groupEnd();
			if (cacheRef) {
				dataCache[cacheRef] = response;
			}
			return response;
		});
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
const buildEndpoint = (endpoint: string, params: IKeyValuePair, buildQueryString?: boolean): string => {
	let apiCall: string = endpoint;
	const result: string[] = [];
	Object.keys(params).map(key => {
		const propVar = `{${key}}`,
			hasVar = apiCall.indexOf(propVar) >= 0;
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
 * Returns the cached data returned previous from an API called that was stored using the cacheRef name
 * @param cacheRef a string reference to the data that was cached in a previous call made to getData
 */
export const checkCache = (cacheRef: string) => {
	if (!dataCache[cacheRef]) {
		return false;
	} else if (!dataCache[cacheRef]) {
		return false;
	} else {
		const cachedData = dataCache[cacheRef];
		console.group('%c' + cacheRef + ' - %cCACHED DATA ', LogStyle.API, LogStyle.CACHED);
		console.log('%cRESPONSE : ', LogStyle.PARAM, cachedData);
		console.groupEnd();
		return cachedData;
	}
};
/**
 * Updates the cached data returned previous from an API called that was stored using the cacheRef name
 * @param cacheRef a string reference to the data that was cached in a previous call made to getData
 */
export const updateCache = (cacheRef: string, data: any) => {
	dataCache[cacheRef] = data;
};
/**
 * Removes the cached data returned previous from an API called that was stored using the cacheRef name
 * @param cacheRef a string reference to the data that was cached in a previous call made to getData
 */
export const removeCache = (cacheRef: string) => {
	delete dataCache[cacheRef];
};