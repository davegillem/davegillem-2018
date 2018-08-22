import { BASE_API_PATH, getApiCall, getApiHeaders } from 'utilities';

/**
 * API Calls
 * Buolds an API object that gets passed along to the getData call in the Https.ts file used for making API calls
 * @param endpoint string to be used as the endpoint for making the API call. Endpoints can contain optional parameters indicated by the {}
 * that will get replaced with the data passed in during the call that utilizes the same parameter name
 * @param optional object that contains key value pairs to override the default method and headers that should be used in the api call
 */
export const getPosts: IDataMethod = getApiCall(
	`${BASE_API_PATH}pages?slug[]=about&slug[]=home&slug[]=resume&fields=id,slug,title.rendered,content.rendered`,
	{
		headers: getApiHeaders()
	}
);
export const getTextKeys: IDataMethod = getApiCall(
	`${BASE_API_PATH}categories?parent=3&fields=id,slug,description&per_page=50`,
	{
		headers: getApiHeaders()
	}
);
export const getSocial: IDataMethod = getApiCall(
	`${BASE_API_PATH}social-accounts?fields=id,title.rendered,url,category,slug&per_page=20'`,
	{
		headers: getApiHeaders()
	}
);
export const getEmployers: IDataMethod = getApiCall(
	`${BASE_API_PATH}employers?fields=id,title.rendered,content.rendered,position,start_date,still_employed,end_date,location,additional`,
	{
		headers: getApiHeaders()
	}
);
export const getEducation: IDataMethod = getApiCall(
	`${BASE_API_PATH}education?fields=id,title.rendered,content.rendered,provider,location,award,completion,course_type,slug&per_page=20`,
	{
		headers: getApiHeaders()
	}
);
export const getReferences: IDataMethod = getApiCall(
	`${BASE_API_PATH}reference?fields=id,title.rendered,content.rendered,job_title,date_provided,slug&per_page=50`,
	{
		headers: getApiHeaders()
	}
);

// 			axios.all([getPosts(), getSocial(), getEmployers(), getEducation(), getReferences()])
// 				.then(axios.spread((pageItems, social, work, education, references) => {
// 					// Parse Pages
// 					for (var i = 0, pageLen = pageItems.data.length; i < pageLen; i++) {
// 						let pageData = pageItems.data[i],
// 							slug 	= pageData.slug;
// 							self.pages[slug] = [pageData]; // needs to be an array
// 					}
// 					// Parse Social Links
// 					self.pages.social = social.data;
// 					// Parse Work History
// 					self.pages.employers = work.data;
// 					// Parse Education
// 					self.pages.education = education.data;
// 					// Parse References
// 					self.pages.references = references.data;

// 					self.dataLoaded();
// 				}));
// 		}
// 	},
