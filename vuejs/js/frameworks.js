import Vue from 'vue';
import Router from 'vue-router';
import axios from 'axios';
import lodash from 'lodash';
import moment from 'moment';

// Assign Globals
window.Vue = Vue;
window._ = lodash;
window.axios = axios;
window.moment = moment;

// Set Defaults
Vue.use(Router);
// window.axios.defaults.headers.common = {
// 	'X-Requested-With' : 'XMLHttpRequest'
// };

// Startup
document.addEventListener('DOMContentLoaded', function () {
	// Get all "navbar-burger" elements
	var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
	
	// Check if there are any navbar burgers
	if ($navbarBurgers.length > 0) {
		// Add a click event on each of them
		$navbarBurgers.forEach(function ($el) {
			$el.addEventListener('click', function () {
				// Get the target from the "data-target" attribute
				var target = $el.dataset.target;
				var $target = document.getElementById(target);
		
				// Toggle the class on both the "navbar-burger" and the "navbar-menu"
				$el.classList.toggle('is-active');
				$target.classList.toggle('is-active');
			});
		});
	}
});