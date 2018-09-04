import Router from 'vue-router';
import Home from './views/Home';
import About from './views/About';
import Resume from './views/Resume';
import Contact from './views/Contact';

export default new Router({
	routes: [
		{
			path: '*',
			redirect: '/'
		},
		{
			path: '/',
			component: Home,
			name: 'home',
			props:{useREST: true}
		},
		{
			path: '/about',
			component: About,
			name: 'about',
			props:{useREST: true}
		},
		{
			path: '/resume',
			component: Resume,
			name: 'resume',
			props:{useREST: true}
		},
		{
			path: '/contact',
			component: Contact,
			name: 'contact',
			props:{}
		}
	],
	linkActiveClass: 'is-active'
});
