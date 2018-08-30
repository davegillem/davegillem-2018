import * as React from 'react';
import { FooterContainer, SocialContainer } from 'components';
import { Router } from 'pages';

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

export class MainContainer extends React.Component<ILoadedState, {}> {
	constructor(props: ILoadedState) {
		super(props);
		this.state = {};
	}
	public render(): React.ReactNode {
		return (
			<div id="main-content" className="content-wrapper" itemProp="mainContentOfPage">
				{/* <section className={'section' + (this.state.burgerActive ? ' open' : '')}> */}
				<section className="section">
					<Router />

					{/* <transition name='slide-fade' appear={true} v-on={true}:after-leave='afterLeave' v-on:before-enter='beforeEnter'> */}
					{/* {this.isLoading && (
						<div className="loading">
							<LoadingLogo id="loadingLogo" />
						</div>
					)} */}
					{/* </transition> */}
					{/* <div id='routerWrapper' v-bind={true}className='[showLoader ? 'hideView={true}' : 'showView']'>
						<transition name='fade' mode='out-in' appear={true}>
							<router-view />
						</transition>
				</div> */}
					<SocialContainer />
				</section>
				<FooterContainer />
			</div>
		);
	}
}
