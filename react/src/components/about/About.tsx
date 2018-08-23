import * as React from 'react';
// import { Social } from './';

export interface IAboutProps extends ILoadedState {
	temp?: string;
	pages: [];
}
// export default {
// 	name: 'About',
// 	props: [],
// 	data() {
// 		return {
// 			isLoaded: this.$root.pages.about ? true : false,
// 			pages: this.$root.pages.about || []
// 		};
// 	},
// 	methods: {},
// 	created() {
// 		this.$bus.$on('dataLoaded', () => {
// 			this.pages = this.$root.pages.about;
// 			this.isLoaded = true;
// 		});
// 	},
// 	computed:{}
// };
export class About extends React.Component<IAboutProps, any> {
	public render() {
		return (
			<div>
				{this.props.isLoaded && (
					<div className="container" id="about" itemScope={true} itemType="http://schema.org/QAPage">
						{this.props.pages.map((page, index) => {
							return (
								<div className="box" key="page.id">
									{/* <h2 className="title">{page.title.rendered}</h2>
									<div id="about-content">{page.content.rendered}</div> */}
								</div>
							);
						})}
					</div>
				)}
			</div>
		);
	}
}
