import * as React from 'react';
import { DataContext } from 'App';
import { Resume } from 'components';

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
export class ResumeContainer extends React.Component<ILoadedState, any> {
	constructor(props: any) {
		super(props);
		this.state = {};
	}
	public render() {
		return (
			<DataContext.Consumer>
				{(dataContext: any) => (
					<Resume
						{...dataContext.pages.resume}
						textKeys={dataContext.textKeys}
						education={dataContext.education}
						work={dataContext.work}
						references={dataContext.references}
					/>
				)}
			</DataContext.Consumer>
		);
	}
}
