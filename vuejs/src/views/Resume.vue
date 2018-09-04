<template>
	<div class='container accordionWrapper' v-if='isLoaded' itemscope itemtype='http://schema.org/ProfilePage'>
		<div id='summary'>
			<input id='resumeSummary' name='resumeAccordion' type='radio' checked />
			<label for='resumeSummary'>{{summary[0].title.rendered}}</label>
			<article class='smallPane'>
				<p v-html='summary[0].content.rendered'></p>
			</article>
		</div>
		<div id='employerList'>
			<input id='resumeEmployers' name='resumeAccordion' type='radio' />
			<label for='resumeEmployers'>Employers</label>
			<article>
				<employer v-for='employer in employers' :key='employer.id' :itemdata=employer></employer>
			</article>
		</div>
		<div id='educationList'>
			<input id='resumeEducation' name='resumeAccordion' type='radio' />
			<label for='resumeEducation'>Education / Certifications</label>
			<article>
				<education v-for='cert in education' :key='cert.id' :itemdata=cert></education>
			</article>
		</div>
		<div id='referenceList'>
			<input id='resumeReferences' name='resumeAccordion' type='radio' />
			<label for='resumeReferences'>References</label>
			<article>
				<reference v-for='ref in references' :key='ref.id' :itemdata=ref></reference>
			</article>
		</div>
	</div>
</template>

<script>
import Employer from '../components/Employer.vue';
import Education from '../components/Education.vue';
import Reference from '../components/Reference.vue';
export default {
	name: 'Resume',
	props: [],
	data() {
		return {
			isLoaded: this.$root.pages.resume ? true : false,
			summary: this.$root.pages.resume || [],
			employers: this.$root.pages.employers || [],
			education: this.$root.pages.education || [],
			references: this.$root.pages.references || []
		};
	},
	methods: {},
	created() {
		this.$bus.$on('dataLoaded', () => {
			this.summary = this.$root.pages.resume;
			this.employers = this.$root.pages.employers;
			this.education = this.$root.pages.education;
			this.references = this.$root.pages.references;
			this.isLoaded = true;
		});
	},
	computed:{},
	components: { Employer, Education, Reference }
};
</script>

<style></style>