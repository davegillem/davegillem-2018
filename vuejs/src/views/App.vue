<template>
	<div id='app' itemscope itemtype='http://schema.org/WebPage'>
		<nav v-bind:class='[showLoader ? "hideNav navbar is-fixed-top" : "showNav navbar is-fixed-top"]' itemscope itemtype='http://schema.org/SiteNavigationElement'>
			<div id="mobile-nav-icon" class='burgerMenu' @click='toggleBurger' :class='{open: burgerActive}'>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div id='appNavbar' class=''>
				<div class='appNavLink'><router-link to='/' exact class='' data-hover='TL;DR'>TL;DR</router-link></div>
				<div class='appNavLink'><router-link to='/about' exact class='' data-hover='About'>About</router-link></div>
				<a class='logoHolder' href='#' itemscope itemtype='http://schema.org/WPHeader'>
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 250 500' alt='Dave Gillem Logo' id='dgLogo' itemprop='primaryImageOfPage'>
						<path d='M201.7 163.3c13.9 9.5 29 16.6 45.3 21.4 0 1.6-2.3 4.3-7.8 5.2-31.2 5.2-27.8 121.9-1.5 240.7-40.6 39-33.4 32.4-56 53.8-1.1 1-12 11.5-13.6
						13-1.8.2-3.4-.7-3.3-2.8 0-1.3 7-6.5 6.1-7.3-15.1-13.7-45.1-26.8-78.9-26.8-26.5 0-55.3 8.1-81 30.3 29.7-48.3 64.6-63 96.1-63 40.8 0 75.9
						24.5 86.8 32.6 2.5-1.8 7.2-6.6 10.9-11.4-5.9-15.4-14.9-59.1-20.6-116.8.3 2.8-4.9 8.7-14.8 17.6-9.9 8.9-27.6 25.5-53.1 49.9-2.2
						0-3.3-1-3.3-2.9l7.7-11.4-4.8-3.8c-9.4-6.6-17.5-14-24.3-22.2-.4.2-.7.5-1.1.7-16.9 10.6-34.4 39.2-35.3 40.7-2.9 0-4.3-1-4.3-2.9 0-1.6 2.4-7.3
						7.2-17.1l-5.3-3.8C18.3 353.7 1 320.6 1 277.6c0-26.3 7.5-50.6 22.5-72.9 15-22.3 34.6-40.1 58.9-53.5-3.2-4.4-9.2-11.7-17.9-21.9-8.8-10.1-15.2-20-20.1-29.2C23.6
						61.4 44.5 18.2 69 1c-1.4 1.2-27.2 24.2-4.5 64.5 4.8 8.5 19.3 24.2 44 46.9 18.8 17.4 32.9 33.5 42.2 48.5 23-17 39-30.5 47.9-40.4l1.9
						2.9c-13.1 13.9-19.6 21.7-19.6 23.3 0 1.6 6.9 7.1 20.8 16.6M81.3 227.2c6.4-11.3 16.3-23.1 29.9-35.4-2.9-5.7-6.3-11.1-10.1-16.1-9.3-12.3-14.6-19.4-15.9-21.3-31.6 19.2-47.4
						54.4-47.4 105.4 0 26.2 5.7 46.6 17 61.2 7.4 9.6 15.5 16 24.2 19.3-8.7-16.7-13-36.1-13-58.2 0-18.3 5.1-36.6 15.3-54.9m99.6 96.7V199.4c0-1.9-4.9-6.2-14.8-13.1-1.6-1.1-3-2.1-4.4-3
						5.9 15.7 8.9 31.2 8.9 46.6 0 39-14.6 72.8-43.7 101.5 9 9.5 18.9 14.3 29.7 14.3 6.1 0 11.6-2.6 16.8-7.7 4.9-5 7.5-9.7 7.5-14.1m-62.7-3.6c6.4-14.9 9.6-32.5 9.6-52.8
						0-15.7-2.1-31.9-6.4-48.5-.6-2.3-1.3-4.6-2-6.8-7.9 16.1-11.9 36.2-11.9 60.2.1 19.8 3.7 35.8 10.7 47.9'
						class='dgLogoGroup dgLogoPath'/>
					</svg>
				</a>
				<div class='appNavLink'><router-link to='/resume' exact class='' data-hover='Resume'>Resume</router-link></div>
				<div class='appNavLink'><router-link to='/contact' exact class='' data-hover='Contact'>Contact</router-link></div>
				<div class='appNavLink socialMenu'>
					<div class='has-dropdown is-hoverable'>
						<div class='navbar-dropdown is-boxed'>
							<social v-for='account in social' :key='account.id' :itemdata=account></social>
						</div>
					</div>
				</div>
			</div>
		</nav>
		<div id='main-content' class='content-wrapper' itemprop='mainContentOfPage' >
			<section class='section'  :class='{open: burgerActive}'>
				<transition name='slide-fade' appear v-on:after-leave='afterLeave' v-on:before-enter='beforeEnter'>
					<div class='loading' v-if='this.$root.isLoading'>
						<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 250 500' id='loadingLogo' enable-background='new 0 0 93 78'>
							<path
								stroke='#e7e6e2'
								stroke-width='2'
								stroke-linecap='round'
								stroke-miterlimit='10'
								class='dgLogoGroup dgLogoPath'
								stroke-dasharray='2800 2800'
								stroke-dashoffset='-50'
								opacity='0'
								style='opacity: 1; stroke-dashoffset: 50px;'
								d='M201.7 163.3c13.9 9.5 29 16.6 45.3 21.4 0 1.6-2.3 4.3-7.8 5.2-31.2 5.2-27.8 121.9-1.5 240.7-40.6 39-33.4
								32.4-56 53.8-1.1 1-12 11.5-13.6 13-1.8.2-3.4-.7-3.3-2.8 0-1.3 7-6.5 6.1-7.3-15.1-13.7-45.1-26.8-78.9-26.8-26.5
								0-55.3 8.1-81 30.3 29.7-48.3 64.6-63 96.1-63 40.8 0 75.9 24.5 86.8 32.6 2.5-1.8 7.2-6.6 10.9-11.4-5.9-15.4-14.9-59.1-20.6-116.8.3 2.8-4.9
								8.7-14.8 17.6-9.9 8.9-27.6 25.5-53.1 49.9-2.2 0-3.3-1-3.3-2.9l7.7-11.4-4.8-3.8c-9.4-6.6-17.5-14-24.3-22.2-.4.2-.7.5-1.1.7-16.9 10.6-34.4
								39.2-35.3 40.7-2.9 0-4.3-1-4.3-2.9 0-1.6 2.4-7.3 7.2-17.1l-5.3-3.8C18.3 353.7 1 320.6 1 277.6c0-26.3 7.5-50.6 22.5-72.9 15-22.3 34.6-40.1
								58.9-53.5-3.2-4.4-9.2-11.7-17.9-21.9-8.8-10.1-15.2-20-20.1-29.2C23.6 61.4 44.5 18.2 69 1c-1.4 1.2-27.2 24.2-4.5 64.5 4.8 8.5 19.3 24.2 44
								46.9 18.8 17.4 32.9 33.5 42.2 48.5 23-17 39-30.5 47.9-40.4l1.9 2.9c-13.1 13.9-19.6 21.7-19.6 23.3 0 1.6 6.9 7.1 20.8 16.6M81.3 227.2c6.4-11.3
								16.3-23.1 29.9-35.4-2.9-5.7-6.3-11.1-10.1-16.1-9.3-12.3-14.6-19.4-15.9-21.3-31.6 19.2-47.4 54.4-47.4 105.4 0 26.2 5.7 46.6 17 61.2 7.4 9.6 15.5
								16 24.2 19.3-8.7-16.7-13-36.1-13-58.2 0-18.3 5.1-36.6 15.3-54.9m99.6 96.7V199.4c0-1.9-4.9-6.2-14.8-13.1-1.6-1.1-3-2.1-4.4-3 5.9 15.7 8.9 31.2 8.9
								46.6 0 39-14.6 72.8-43.7 101.5 9 9.5 18.9 14.3 29.7 14.3 6.1 0 11.6-2.6 16.8-7.7 4.9-5 7.5-9.7 7.5-14.1m-62.7-3.6c6.4-14.9 9.6-32.5 9.6-52.8
								0-15.7-2.1-31.9-6.4-48.5-.6-2.3-1.3-4.6-2-6.8-7.9 16.1-11.9 36.2-11.9 60.2.1 19.8 3.7 35.8 10.7 47.9'/>
						</svg>
					</div>
				</transition>
				<div id='routerWrapper' v-bind:class='[showLoader ? "hideView" : "showView"]' v-if="isLoaded">
					<transition name='fade' mode='out-in' appear>
						<router-view />
					</transition>
				</div>
				<div id='socialLinks' v-bind:class='[showLoader ? "hideView" : "showView"]' v-if="isLoaded">
					<ul class='social-networks square spin-icon'>
						<li v-for='link in social' :key='link.id' :data-dgtip='link.title.rendered'>
							<a :href='link.url' :class='"icon-"+link.slug' class='icon' target='_blank'>{{link.title.rendered}}</a>
						</li>
					</ul>
				</div>
			</section>
			
			<footer class='footer' itemscope itemtype='http://schema.org/WPFooter' v-if="isLoaded">
				<div class='container'>
					<div class='content has-text-centered'>
						<p>
							© 1998 - {{currentYear}} Dave Gillem . all rights reserved {build your own}.
						</p>
					</div>
				</div>
			</footer>
		</div>
	</div>
</template>

<script>
import Social from '../components/Social.vue';
export default {
	name: 'app',
	data() {
		return {
			currentYear: new Date().getFullYear(),
			showLoader: true,
			burgerActive: false,
			isLoaded: this.$root.pages.social ? true : false,
			social: this.$root.pages.social || []
		};
	},
	props: {},
	methods: {
		toggleBurger(){
			this.burgerActive = !this.burgerActive;
        },
		changeRoute(x) {
			this.$root.isLoading = true;
		},
		afterLeave: function(el) {
			this.showLoader = false;
		},
		beforeEnter: function(el) {
			this.showLoader = true;
		},
		whichAnimationEvent(){
			var t,
				el = document.getElementById('loadingLogo'),
				animations = {
								'animation'      : 'animationend',
								'OAnimation'     : 'oAnimationEnd',
								'MozAnimation'   : 'animationend',
								'WebkitAnimation': 'webkitAnimationEnd'
							};

			for(t in animations){
				if( el.style[t] !== undefined ){
					return animations[t];
				}
			}
		}
	},
	computed: {},
	watch: {
		'$route' (to, from) {
			this.burgerActive = false;
		}
	},
	mounted() {
		let root = this.$root,
			el = document.getElementById('loadingLogo'),
			animationEvent = this.whichAnimationEvent();
		el.addEventListener(animationEvent, () => {
			root.loaderFinished();
		});
	},
	created() {
		this.$bus.$on('dataLoaded', () => {
			this.social = this.$root.pages.social;
			this.isLoaded = true;
		});
	},
	components: { Social }
};
</script>

<style></style>