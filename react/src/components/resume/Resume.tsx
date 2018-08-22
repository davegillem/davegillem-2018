import * as React from 'react';
// import { Education, Employer, Reference } from './';

export interface IResumeProps extends ILoadedState {
	temp?: string;
}

// import Employer from '../components/Employer.vue';
// import Education from '../components/Education.vue';
// import Reference from '../components/Reference.vue';
// export default {
// 	name: 'Resume',
// 	props: [],
// 	data() {
// 		return {
// 			isLoaded: this.$root.pages.resume ? true : false,
// 			summary: this.$root.pages.resume || [],
// 			employers: this.$root.pages.employers || [],
// 			education: this.$root.pages.education || [],
// 			references: this.$root.pages.references || []
// 		};
// 	},
// 	methods: {},
// 	created() {
// 		this.$bus.$on('dataLoaded', () => {
// 			this.summary = this.$root.pages.resume;
// 			this.employers = this.$root.pages.employers;
// 			this.education = this.$root.pages.education;
// 			this.references = this.$root.pages.references;
// 			this.isLoaded = true;
// 		});
// 	},
// 	computed:{},
// 	components: { Employer, Education, Reference }
// };

export class Resume extends React.Component<IResumeProps, any> {
	public render() {
		return (
			<div>
				{/* {{this.props.isLoaded && <div className='container accordionWrapper' itemScope={true} itemType='http://schema.org/ProfilePage'>
		<div id='summary'>
			<input id='resumeSummary' name='resumeAccordion' type='radio' checked />
			<label for='resumeSummary'>{{summary[0].title.rendered}}</label>
			<article className='smallPane'>
				<p>{summary[0].content.rendered}</p>
			</article>
		</div>
		<div id='employerList'>
			<input id='resumeEmployers' name='resumeAccordion' type='radio' />
			<label for='resumeEmployers'>Employers</label>
			<article>
			{this.props.employers.map((employer, index) => {
				return(
					<employer key='employer.id' {...employer}></employer>
				)
			})}
				
			</article>
		</div>
		<div id='educationList'>
			<input id='resumeEducation' name='resumeAccordion' type='radio' />
			<label for='resumeEducation'>Education / Certifications</label>
			<article>
			{this.props.education.map((cert, index) => {
				return(
					<education key='cert.id' {...cert}></education>
				)
			})}
				
			</article>
		</div>
		<div id='referenceList'>
			<input id='resumeReferences' name='resumeAccordion' type='radio' />
			<label for='resumeReferences'>References</label>
			<article>
			{this.props.references.map((ref, index) => {
				return(
					<reference key='ref.id' {...ref}></reference>
				)
			})}
				
			</article>
		</div>
	</div>} */}
			</div>
		);
	}
}
