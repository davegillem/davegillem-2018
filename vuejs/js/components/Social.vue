<template>
	<a class='navbar-item nestedLink' :class='"icon-menu-"+this.itemdata.slug' :href='this.itemdata.url' target='_blank'>
		{{this.itemdata.title.rendered}}
	</a>
</template>

<script>
export default {
	name: 'social',
	data() {
		return {};
	},
	props: ['itemdata']
};
</script>

<style></style>