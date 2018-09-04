<template>
	<div class='employer' itemprop='employee' itemscope itemtype='http://schema.org/EmployeeRole'>
		<div class='jobDates'>
			<span class='jobStart' itemprop='startDate' :data-actualdate='this.itemdata.start_date'>
			{{this.itemdata.start_date  | formatDate}}
			</span><span class='jobEnd' itemprop='endDate' :data-actualdate='this.itemdata.end_date'>
				{{endDate}}
			</span>
		</div>
		<div class='jobPosition' itemprop='roleName'>{{this.itemdata.position}}</div>
		<div class='jobEmployer' itemprop='name' itemscope itemtype='http://schema.org/Organization'>{{this.itemdata.title.rendered}}</div>
		<div class='jobAddress' itemprop='address' itemscope itemtype='http://schema.org/Organization'>{{this.itemdata.location}}</div>
		<div class='jobDescription' itemprop='description' v-html='this.itemdata.content.rendered'></div>
		<div class='jobAddl' itemprop='alternateName' v-if='this.itemdata.additional'>ADDITIONAL: {{this.itemdata.additional}}</div>
	</div>
</template>

<script>
export default {
	name: 'employer',
	data() {
		return {};
	},
	props: ['itemdata'],
	computed: {
		endDate: function () {
			return this.itemdata.still_employed === '1' ? 'Present' :  Vue.options.filters.formatDate(this.itemdata.end_date);
		}
	}
}
</script>

<style></style>