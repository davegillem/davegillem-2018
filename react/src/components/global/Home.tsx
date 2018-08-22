import * as React from 'react';

export interface IHomeProps extends ILoadedState {
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

export class Home extends React.Component<IHomeProps, any> {
	public render() {
		return (
			<div>
				{/* {this.props.isLoaded && <div className='container' id='tldr' itemScope={true} itemType='http://schema.org/AboutPage'>
				{this.props.pages.map((page, index) => {
					return(
						<div className='box' key='page.id'>
							<h2 className='title'>{page.title.rendered}</h2>
							<div id='tldr-content'>{page.content.rendered}</div>
						</div>
					)
				})}
				</div>} */}
			</div>
		);
	}
}
