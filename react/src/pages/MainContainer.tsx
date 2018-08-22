import * as React from 'react';
import { getData } from 'utilities';
import { LoadingLogo, SocialContainer } from 'components';

// import * as Router from 'utilities';
// import { Footer, Navbar } from 'components';
//

// const footerKeys: any = TEXTKEYS.footerKeys;
// const globalKeys: any = TEXTKEYS.globalKeys;

// import Social from '../components/Social.vue';
// export default {
// 	name: 'app',
// 	data() {
// 		return {
// 			currentYear: new Date().getFullYear(),
// 			showLoader: true,
// 			burgerActive: false,
// 			isLoaded: this.$root.pages.social ? true : false,
// 			social: this.$root.pages.social || []
// 		};
// 	},
// 	props: {},
// 	methods: {
// 		toggleBurger(){
// 			this.burgerActive = !this.burgerActive;
//         },
// 		changeRoute(x) {
// 			this.$root.isLoading = true;
// 		},
// 		afterLeave: function(el) {
// 			this.showLoader = false;
// 		},
// 		beforeEnter: function(el) {
// 			this.showLoader = true;
// 		},
// 		whichAnimationEvent(){
// 			var t,
// 				el = document.getElementById('loadingLogo'),
// 				animations = {
// 								'animation'      : 'animationend',
// 								'OAnimation'     : 'oAnimationEnd',
// 								'MozAnimation'   : 'animationend',
// 								'WebkitAnimation': 'webkitAnimationEnd'
// 							}

// 			for(t in animations){
// 				if( el.style[t] !== undefined ){
// 					return animations[t];
// 				}
// 			}
// 		}
// 	},
// 	computed: {},
// 	watch: {
// 		'$route' (to, from) {
// 			this.burgerActive = false;
// 		}
// 	},
// 	mounted() {
// 		let root = this.$root,
// 			el = document.getElementById('loadingLogo'),
// 			animationEvent = this.whichAnimationEvent();
// 		el.addEventListener(animationEvent, () => {
// 			root.loaderFinished();
// 		});
// 	},
// 	created() {
// 		this.$bus.$on('dataLoaded', () => {
// 			this.social = this.$root.pages.social;
// 			this.isLoaded = true;
// 		});
// 	},
// 	computed:{},
// 	components: { Social }
// };

export class MainContainer extends React.Component<{}, {}> {
	private isLoading: boolean = true;
	constructor(props: any) {
		super(props);
		this.state = {};
	}
	public componentDidMount() {
		getData(getApplications, null, 'mainData')
			.then(({ ...postData }) => {
				console.log('postData', postData);
				this.setState({ applications: postData.applications, loading: false });
			})
			// TODO: better error handling. Right now, there is no useful error message. So we return a generic textkeys.
			.catch((error: any) => {
				console.log('error');
				this.setState({ loading: false, notification: textKeys.genericError });
			});
	}
	public render(): React.ReactNode {
		return (
			<div id="main-content" className="content-wrapper" itemProp="mainContentOfPage">
				{/* <section className='section'  className='{open: burgerActive}'> */}
				<section className="section">
					{/* <transition name='slide-fade' appear={true} v-on={true}:after-leave='afterLeave' v-on:before-enter='beforeEnter'> */}
					{this.isLoading && (
						<div className="loading">
							<LoadingLogo id="loadingLogo" />
						</div>
					)}
					{/* </transition> */}
					{/* <div id='routerWrapper' v-bind={true}className='[showLoader ? 'hideView={true}' : 'showView']'>
						<transition name='fade' mode='out-in' appear={true}>
							<router-view />
						</transition>
				</div> */}
					<SocialContainer />
				</section>
			</div>
		);
	}
}
