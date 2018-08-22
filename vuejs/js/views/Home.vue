<template>
	<div class='container' id='tldr' v-if='isLoaded' itemscope itemtype='http://schema.org/AboutPage'>
		<div class='box' v-for='page in pages' :key='page.id'>
			<h2 class='title'>{{page.title.rendered}}</h2>
			<div id='tldr-content' v-html='page.content.rendered'></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Home',
	props: [],
	data() {
		return {
			isLoaded: this.$root.pages.home ? true : false,
			pages: this.$root.pages.home || []
		};
	},
	methods: {},
	created() {
		this.$bus.$on('dataLoaded', () => {
			this.pages = this.$root.pages.home;
			this.isLoaded = true;
		});
	},
	computed:{}
};
</script>

<style></style>