import * as React from 'react';
import { DataContext } from 'App';
import { Home } from 'components';

export class HomeContainer extends React.Component<ILoadedState, any> {
	constructor(props: any) {
		super(props);
		this.state = {};
	}

	public render() {
		return (
			<DataContext.Consumer>{(dataContext: any) => <Home {...dataContext.pages.home} />}</DataContext.Consumer>
		);
	}
}
