import * as React from 'react';
import { getData } from 'utilities';

export interface IHomeContainerProps extends ILoadedState {
	temp?: string;
}

// export default {
// 	name: 'Home',
// 	props: [],
// 	data() {
// 		return {
// 			isLoaded: this.$root.pages.home ? true : false,
// 			pages: this.$root.pages.home || []
// 		};
// 	},
// 	methods: {},
// 	created() {
// 		this.$bus.$on('dataLoaded', () => {
// 			this.pages = this.$root.pages.home;
// 			this.isLoaded = true;
// 		});
// 	},
// 	computed:{}
// };

export class HomeContainer extends React.Component<IHomeContainerProps, any> {
	constructor(props: any) {
		super(props);
		this.state = {};
	}
	public componentDidMount() {
		getData(getApplications, null, 'homeData')
			.then(({ ...postData }) => {
				console.log('postData', postData);
				this.setState({ applications: postData.applications, loading: false });
			})
			// TODO: better error handling. Right now, there is no useful error message. So we return a generic textkeys.
			.catch((error: any) => {
				console.log('error');
				this.setState({ loading: false, notification: textKeys.genericError });
			});
	}
	public render() {
		return (
			<div>
				HOME PAGE
				{/* {this.props.isLoaded && <div className='container' id='tldr' itemScope={true} itemType='http://schema.org/AboutPage'>
				{this.props.pages.map((page, index) => {
					return (
						<div className='box' key='page.id'>
							<h2 className='title'>{page.title.rendered}</h2>
							<div id='tldr-content'>{page.content.rendered}</div>
						</div>
					)
				})}
			</div>
				
		} */}
			</div>
		);
	}
}
