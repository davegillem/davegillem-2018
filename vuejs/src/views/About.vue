<template>
	<div class='container' id='about' v-if='isLoaded' itemscope itemtype='http://schema.org/QAPage'>
		<div class='box' v-for='page in pages' :key='page.id'>
			<h2 class='title'>{{page.title.rendered}}</h2>
			<div id='about-content' v-html='page.content.rendered'></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'About',
	props: [],
	data() {
		return {
			isLoaded: this.$root.pages.about ? true : false,
			pages: this.$root.pages.about || []
		};
	},
	methods: {},
	created() {
		this.$bus.$on('dataLoaded', () => {
			this.pages = this.$root.pages.about;
			this.isLoaded = true;
		});
	},
	computed:{}
};
</script>

<style></style> 