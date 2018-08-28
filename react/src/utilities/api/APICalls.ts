import { BASE_API_PATH, getApiCall } from './Http';

/**
 * API Calls
 * Buolds an API object that gets passed along to the getData call in the Https.ts file used for making API calls
 * @param endpoint string to be used as the endpoint for making the API call. Endpoints can contain optional parameters indicated by the {}
 * that will get replaced with the data passed in during the call that utilizes the same parameter name
 * @param optional object that contains key value pairs to override the default method and headers that should be used in the api call
 */
export const getPages: IDataMethod = getApiCall(
	`${BASE_API_PATH}pages?slug=about,home,resume,contact&fields=id,slug,title.rendered,content.rendered`
);
export const getTextKeys: IDataMethod = getApiCall(
	`${BASE_API_PATH}categories?parent=3&fields=slug,description&per_page=50`
);
export const getSocial: IDataMethod = getApiCall(
	`${BASE_API_PATH}social-accounts?fields=title.rendered,url,category,slug&per_page=50`
);
export const getEmployers: IDataMethod = getApiCall(
	`${BASE_API_PATH}employers?fields=title.rendered,content.rendered,position,start_date,still_employed,end_date,location,additional&per_page=50`
);
export const getEducation: IDataMethod = getApiCall(
	`${BASE_API_PATH}education?fields=slug,title.rendered,content.rendered,provider,location,award,completion,course_type&per_page=50`
);
export const getReferences: IDataMethod = getApiCall(
	`${BASE_API_PATH}reference?per_page=50&fields=title.rendered,content.rendered,job_title,date_provided,slug`
);
