import * as React from 'react';
import { DataContext } from 'App';
import { Social } from '.';

export class SocialContainer extends React.Component<ILoadedState, {}> {
	constructor(props: ILoadedState) {
		super(props);
		this.state = {};
	}

	public render(): React.ReactNode {
		return (
			<DataContext.Consumer>
				{(dataContext: IDataContext): JSX.Element => {
					return <Social socialItems={...dataContext.social} />;
				}
				}
			</DataContext.Consumer>
		);
	}
}
