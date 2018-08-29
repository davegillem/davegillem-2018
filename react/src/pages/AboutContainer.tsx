import * as React from 'react';
import { About } from 'components';
import { DataContext } from 'App';

export class AboutContainer extends React.Component<ILoadedState, any> {
	constructor(props: any) {
		super(props);
		this.state = {};
	}

	public render() {
		return (
			<DataContext.Consumer>{(dataContext: any) => <About {...dataContext.pages.about} />}</DataContext.Consumer>
		);
	}
}
