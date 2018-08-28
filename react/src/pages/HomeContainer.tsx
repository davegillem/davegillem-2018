import * as React from 'react';
import { DataContext } from 'App';

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
		// getData(getPages, {}, 'homeData')
		// 	.then(({ ...postData }) => {
		// 		console.log('postData', postData);
		// 		// this.setState({ applications: postData.applications, loading: false });
		// 	})
		// 	// TODO: better error handling. Right now, there is no useful error message. So we return a generic textkeys.
		// 	.catch((error: any) => {
		// 		console.log('error');
		// 		// this.setState({ loading: false, notification: textKeys.genericError });
		// 	});
	}
	public render() {
		return (
			<DataContext.Consumer>
				{(dataContext: any) => (
					<>
						<div className="container" id="tldr" itemScope={true} itemType="http://schema.org/AboutPage">
							<div className="box" key="page.id">
								<h2 className="title">{dataContext.pages.home.title.rendered}</h2>
								<div
									id="tldr-content"
									dangerouslySetInnerHTML={{ __html: dataContext.pages.home.content.rendered }}
								/>
							</div>
						</div>
					</>
				)}
			</DataContext.Consumer>
		);
	}
}
