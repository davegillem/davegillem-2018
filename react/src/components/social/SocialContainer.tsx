import * as React from 'react';
import { DataContext } from 'App';
import { Social } from '.';

export class SocialContainer extends React.Component<ILoadedState, any> {
	constructor(props: ILoadedState) {
		super(props);
		this.state = {};
	}

	public render() {
		return (
			<DataContext.Consumer>
				{(dataContext: any) => <Social socialItems={...dataContext.social} />}
			</DataContext.Consumer>
		);
	}
}
