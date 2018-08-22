<template>
	<div class="reference" itemprop="review" itemscope itemtype="http://schema.org/CreativeWork">
		<div class='refDetails' v-html="this.itemdata.content.rendered" itemprop="reviewBody"></div>
		<div class='refAuthor' itemprop="author">{{this.itemdata.title.rendered}}</div>
		<div class='refTitle' itemprop="reviewAspect">{{this.itemdata.job_title}}</div>
		<div class='refDate' itemprop="dateCreated" data-actualdate='this.itemdata.date_provided'>{{this.itemdata.date_provided  | humanizeDate }}</div>
	</div>
</template>

<script>
export default {
	name: 'reference',
	data() {
		return {};
	},
	props: ['itemdata']
};
</script>

<style></style>