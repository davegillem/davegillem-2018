import Vue from 'vue';
import './frameworks.js';
import app from './views/App';
import router from './routes';
// eslint-disable-next-line
Vue.config.productionTip = false;
Vue.config.devtools = true;

var portfolio = new Vue({
	el: '#app',
	router,
	components: {app},
	template: '<app/>',
	data: {
		pages: {}
	},
	methods: {
		getWordpressUrl(slug){
			return 'http://api.davegillem.com/wp-json/wp/v2/pages?slug='+slug+'&about&fields=id,title.rendered,content.rendered';
		}
	}
});


