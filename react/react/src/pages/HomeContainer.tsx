import * as React from 'react';
import { DataContext } from 'App';
import { Home } from 'components';

export class HomeContainer extends React.Component<ILoadedState, {}> {
	constructor(props: ILoadedState) {
		super(props);
		this.state = {};
	}

	public render(): React.ReactNode {
		return (
			<DataContext.Consumer>
				{(dataContext: IDataContext): React.ReactNode => {
					return <Home {...dataContext.pages.home} />;
				}}
			</DataContext.Consumer>
		);
	}
}
