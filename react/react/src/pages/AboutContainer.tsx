import * as React from 'react';
import { About } from 'components';
import { DataContext } from 'App';

export class AboutContainer extends React.Component<ILoadedState, {}> {
	constructor(props: ILoadedState) {
		super(props);
		this.state = {};
	}

	public render(): React.ReactNode {
		return (
			<DataContext.Consumer>
				{(dataContext: IDataContext): React.ReactNode => {
					return <About {...dataContext.pages.about} />;
				}}
			</DataContext.Consumer>
		);
	}
}
