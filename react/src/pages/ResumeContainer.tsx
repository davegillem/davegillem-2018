import * as React from 'react';
import { getData, getPages } from 'utilities';
import { Resume } from 'components';

export interface IResumeContainerProps extends ILoadedState {
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

export class ResumeContainer extends React.Component<IResumeContainerProps, any> {
	constructor(props: any) {
		super(props);
		this.state = {};
	}
	public componentDidMount() {
		getData(getPages, {}, 'resumeData')
			.then(({ ...postData }) => {
				console.log('postData', postData);
				// this.setState({ applications: postData.applications, loading: false });
			})
			// TODO: better error handling. Right now, there is no useful error message. So we return a generic textkeys.
			.catch((error: any) => {
				console.log('error');
				// this.setState({ loading: false, notification: textKeys.genericError });
			});
	}
	public render() {
		return (
			<div>
				<Resume />
			</div>
		);
	}
}
