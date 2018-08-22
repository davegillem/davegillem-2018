<template>
	<div class='education' itemscope itemtype='http://schema.org/CourseInstance' :class='"eduType-"+this.itemdata.course_type'>
		<div class='eduDate' itemprop='endDate' :data-actualdate='this.itemdata.completion'>{{this.itemdata.completion | formatDate('true') }}</div>
		<div class='eduEvent' itemprop='subEvent'>{{this.itemdata.title.rendered}}</div>
		<div class='eduProvider' itemprop='organizer'>
			<a :href='this.itemdata.location' target='_blank'>{{this.itemdata.provider}}</a>
			<span class='eduAward' itemprop='award' v-if='this.itemdata.award'> - {{this.itemdata.award}}</span>
		</div>
		<div class='eduDescription' v-html='this.itemdata.content.rendered' itemprop='about'></div>
	</div>
</template>

<script>
export default {
	name: 'education',
	data() {
		return {};
	},
	props: ['itemdata']
};
</script>

<style></style>