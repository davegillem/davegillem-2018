import * as React from 'react';
import { Footer, LoadingLogo, Navbar } from 'components';
import {
	getData,
	getEducation,
	getEmployers,
	getPages,
	getReferences,
	getSocial,
	getTextKeys,
	startLogger
	} from 'utilities';
import { MainContainer } from 'pages';

startLogger();

interface IAppState {
	education: IEducationData[];
	isLoading: boolean;
	pages: IPage;
	pageItems: IPageData[];
	references: IReferenceData[];
	social: ISocialAccountData[];
	textKeyData: ITextKeyData[];
	textKeys: ITextKeys;
	work: IEmployerData[];
}

export const DataContext = React.createContext({} as IAppState);

export class App extends React.Component<{}, IAppState> {
	constructor(props: any) {
		super(props);
		this.state = {
			education: [],
			isLoading: true,
			pageItems: [],
			pages: {},
			references: [],
			social: [],
			textKeyData: [],
			textKeys: {},
			work: []
		};
	}
	public processData = (wpData: IAppState) => {
		const tempPages: IPage = {};
		const tempKeys: ITextKeys = {};
		const { pageItems, textKeyData, ...other }: IAppState = wpData;
		pageItems.map(page => {
			tempPages[page.slug] = page;
		});
		textKeyData.map(key => {
			tempKeys[key.slug] = key.description;
		});
		this.setState({ pages: tempPages, textKeys: tempKeys, ...other, isLoading: false });
		console.log('RESULT', this.state);
	};
	public componentDidMount() {
		try {
			Promise.all<
				Promise<IPageData[]>,
				Promise<ITextKeyData[]>,
				Promise<ISocialAccountData[]>,
				Promise<IEmployerData[]>,
				Promise<IEducationData[]>,
				Promise<IReferenceData[]>
			>([
				getData(getPages),
				getData(getTextKeys),
				getData(getSocial),
				getData(getEmployers),
				getData(getEducation),
				getData(getReferences)
			]).then(([pageItems, textKeyData, social, work, education, references]) => {
				const wpData: any = {
					education: education,
					pageItems: pageItems,
					references: references,
					social: social,
					textKeyData: textKeyData,
					work: work
				};
				this.processData(wpData);
			});
		} catch (err) {
			console.log(err);
		}
	}
	public render(): React.ReactNode {
		// const dataContext: object = this.state;
		return (
			<div id="appMain" itemScope={true} itemType="http://schema.org/WebPage">
				{this.state.isLoading ? (
					<div className="loading">
						<LoadingLogo id="loadingLogo" />
					</div>
				) : (
					// <DataContext.Provider value={this.state.textKeys}>
					<DataContext.Provider value={this.state}>
						<Navbar />
						<MainContainer />
						<Footer />
					</DataContext.Provider>
				)}
			</div>
		);
	}
}

// const EventBus = new Vue();
// const dict = {
// 	custom: {
// 		contactName: {
// 			required: 'Sorry I don't speak subliminal, you need an actual name here'
// 		},
// 		contactEmail: {
// 			required: 'Pretty simple concept, where do you get your digital communications delivered??',
// 			email: 'Dude, come on you know what an email address looks like!'
// 		},
// 		contactMsg: {
// 			required: 'Did you forget why you were here?'
// 		}
// 	}
// };
// Validator.localize('en', dict);
// Vue.use(VeeValidate);

// eslint-disable-next-line
// Vue.config.productionTip = false;
// Vue.config.devtools = true;

// Object.defineProperties(Vue.prototype, {
// 	$bus: {
// 		get: function () {
// 			return EventBus;
// 		}
// 	}
// });
// clean up date passed in from Wordpress API
// function cleanWPdate(dateStr){
// 	let pattern = /(\d{2})(\d{2})(\d{4})/;
// 	return new Date(dateStr.replace(pattern, '$3-$1-$2'));
// }
// Vue.filter('humanizeDate', (value) => {
// 	if (value) {
// 		let myDate = cleanWPdate(value);
// 		return moment(myDate).fromNow();
// 	}
// });
// Vue.filter('formatDate', (value, clean) => {
// 	if (value) {
// 		let myDate = clean === 'true' ? cleanWPdate(value) : value;
// 		return moment(myDate).format('MM/DD/YYYY');
// 	}
// });

// var portfolio = new Vue({
// 	el: '#app',
// 	router,
// 	components: {app},
// 	template: '<app/>',
// 	data: {
// 		firstRun: true,
// 		dataReady: false,
// 		isLoaded: false,
// 		isLoading: true,
// 		loaderComplete: false,
// 		pages: {}
// 	},
// 	watch: {
// 		// call again the method if the route changes
// 		$route: 'changeRoute'
// 	},
// 	methods: {
// 		changeRoute(routeData) {
// 			let routeObj 	= this.parseRouteData(routeData),
// 				page		= routeObj.name,
// 				props		= routeObj.props;
// 			if ((!this.pages[page] && props.useREST) || this.firstRun){
// 				this.firstRun = false;
// 				this.getWordpressData();
// 			} else {
// 				this.dataLoaded();
// 			}
// 		},
// 		parseRouteData(routeItem){
// 			let routeData = routeItem.matched[0],
// 				routeObj = {
// 					name	: routeData.name,
// 					path 	: routeData.path,
// 					props 	: routeData.props.default || []
// 				};
// 			return routeObj;
// 		},
// 		dataLoading(){
// 			this.isLoading = true;
// 		},
// 		dataLoaded(){
// 			this.$bus.$emit('dataLoaded');
// 			this.dataReady = true;
// 			this.setAppReady();
// 		},
// 		loaderFinished(){
// 			this.loaderComplete = true;
// 			this.setAppReady();
// 		},
// 		setAppReady(){
// 			if (this.loaderComplete && this.dataReady){
// 				this.isLoading = false;
// 				document.getElementById('main-content').scrollTop = 0;
// 			}
// 		},
// 		getWordpressData(){
// 			const wpURL = 'http://api.davegillem.com/wp-json/wp/v2/';
// 			var self = this;
// 			function getPosts() {
// 				return axios.get(wpURL+'pages?slug[]=about&slug[]=home&slug[]=resume&fields=id,slug,title.rendered,content.rendered');
// 			}
// 			function getSocial() {
// 				return axios.get(wpURL+'social-accounts?fields=id,title.rendered,url,category,slug&per_page=20');
// 			}
// 			function getEmployers() {
// 				return axios.get(wpURL+'employers?fields=id,title.rendered,content.rendered,position,start_date,still_employed,end_date,location,additional');
// 			}
// 			function getEducation() {
// 				return axios.get(wpURL+'education?fields=id,title.rendered,content.rendered,provider,location,award,completion,course_type,slug&per_page=20');
// 			}
// 			function getReferences() {
// 				return axios.get(wpURL+'reference?fields=id,title.rendered,content.rendered,job_title,date_provided,slug&per_page=50');
// 			}

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
// 	created : function () {
// 		this.changeRoute(this.$route);
// 	}
