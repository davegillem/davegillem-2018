import Vue from "vue";
import "./frameworks.js";
import app from "./views/App";
import router from "./routes";
import axios from "axios";
import VeeValidate, {
	Validator,
} from "vee-validate";
import moment from "moment";
import "./sass/app.scss";
const EventBus = new Vue();
const dict = {
	custom: {
		contactName: {
			required: "Sorry I don't speak subliminal, you need an actual name here"
		},
		contactEmail: {
			required: "Pretty simple concept, where do you get your digital communications delivered??",
			email: "Dude, come on you know what an email address looks like!"
		},
		contactMsg: {
			required: "Did you forget why you were here?"
		}
	}
};
Validator.localize("en", dict);
Vue.use(VeeValidate);

// eslint-disable-next-line
Vue.config.productionTip = false;
Vue.config.devtools = true;

Object.defineProperties(Vue.prototype, {
	$bus: {
		get: function () {
			return EventBus;
		}
	}
});
// clean up date passed in from Wordpress API
function cleanWPdate(dateStr) {
	let pattern = /(\d{2})(\d{2})(\d{4})/;
	return new Date(dateStr.replace(pattern, "$3-$1-$2"));
}
Vue.filter("humanizeDate", value => {
	if (value) {
		let myDate = cleanWPdate(value);
		return moment(myDate).fromNow();
	}
});
Vue.filter("formatDate", (value, clean) => {
	if (value) {
		let myDate = clean === "true" ? cleanWPdate(value) : value;
		return moment(myDate).format("MM/DD/YYYY");
	}
});

new Vue({
	//el: "#app",
	router,
	// components: {
	// 	app
	// },
	// template: "<app/>",
	data: {
		firstRun: true,
		dataReady: false,
		isLoaded: false,
		isLoading: true,
		loaderComplete: false,
		pages: {}
	},
	watch: {
		// call again the method if the route changes
		$route: "changeRoute"
	},
	methods: {
		changeRoute(routeData) {
			let routeObj = this.parseRouteData(routeData),
				page = routeObj.name,
				props = routeObj.props;
			if ((!this.pages[page] && props.useREST) || this.firstRun) {
				this.firstRun = false;
				this.getWordpressData();
			} else {
				this.dataLoaded();
			}
		},
		parseRouteData(routeItem) {
			let routeData = routeItem.matched[0],
				routeObj = {
					name: routeData.name,
					path: routeData.path,
					props: routeData.props.default || []
				};
			return routeObj;
		},
		dataLoading() {
			this.isLoading = true;
		},
		dataLoaded() {
			this.$bus.$emit("dataLoaded");
			this.dataReady = true;
			this.setAppReady();
		},
		loaderFinished() {
			this.loaderComplete = true;
			this.setAppReady();
		},
		setAppReady() {
			if (this.loaderComplete && this.dataReady) {
				this.isLoading = false;
				document.getElementById("main-content").scrollTop = 0;
			}
		},
		getWordpressData() {
			const wpURL = "https://davegillem.com/data"; // "http://api.davegillem.com/wp-json/wp/v2/";
			var self = this;

			function getPosts() {
				return axios.get(
					`${wpURL}/pages.json`
					//"pages?slug=about,home,resume&fields=slug,title.rendered,content.rendered"
				);
			}

			function getSocial() {
				return axios.get(
					`${wpURL}/social-accounts.json`
					//"social-accounts?fields=title.rendered,url,category,slug"
				);
			}

			function getEmployers() {
				return axios.get(
					`${wpURL}/employers.json`
					//"employers?fields=title.rendered,content.rendered,position,start_date,still_employed,end_date,location,additional"
				);
			}

			function getEducation() {
				return axios.get(
					`${wpURL}/education.json`
					//"education?fields=title.rendered,content.rendered,provider,location,award,completion,course_type,slug"
				);
			}

			function getReferences() {
				return axios.get(
					`${wpURL}/reference.json`
					//"reference?fields=title.rendered,content.rendered,job_title,date_provided,slug"
				);
			}

			axios
				.all([
					getPosts(),
					getSocial(),
					getEmployers(),
					getEducation(),
					getReferences()
				])
				.then(
					axios.spread((pageItems, social, work, education, references) => {
						// Parse Pages
						for (var i = 0, pageLen = pageItems.data.length; i < pageLen; i++) {
							let pageData = pageItems.data[i],
								slug = pageData.slug;
							self.pages[slug] = [pageData]; // needs to be an array
						}
						// Parse Social Links
						self.pages.social = social.data;
						// Parse Work History
						self.pages.employers = work.data;
						// Parse Education
						self.pages.education = education.data;
						// Parse References
						self.pages.references = references.data;

						self.dataLoaded();
					})
				);
		}
	},
	created: function () {
		this.changeRoute(this.$route);
	},
	render: h => h(app)
}).$mount("#app");