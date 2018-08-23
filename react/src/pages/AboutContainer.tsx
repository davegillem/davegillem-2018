import * as React from 'react';
import { getData, getPages } from 'utilities';

interface IAboutContainerProps extends ILoadedState {
	temp?: string;
}
// export default {
// 	name: 'AboutContainer',
// 	props: [],
// 	data() {
// 		return {
// 			isLoaded: this.$root.pages.AboutContainer ? true : false,
// 			pages: this.$root.pages.AboutContainer || []
// 		};
// 	},
// 	methods: {},
// 	created() {
// 		this.$bus.$on('dataLoaded', () => {
// 			this.pages = this.$root.pages.AboutContainer;
// 			this.isLoaded = true;
// 		});
// 	},
// 	computed:{}
// };
export class AboutContainer extends React.Component<IAboutContainerProps, any> {
	constructor(props: any) {
		super(props);
		this.state = {};
	}
	public componentDidMount() {
		getData(getPages, {}, 'aboutData')
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
				ABOUT PAGE
				{/* {this.props.isLoaded && <div className='container' id='AboutContainer' itemScope={true} itemType='http://schema.org/QAPage'>
				{this.props.pages.map((page, index) => {
					return(
						<div className='box' key='page.id'>
							<h2 className='title'>{page.title.rendered}</h2>
							<div id='AboutContainer-content'>{page.content.rendered}</div>
						</div>
					)
				})}
				</div>} */}
			</div>
		);
	}
}
