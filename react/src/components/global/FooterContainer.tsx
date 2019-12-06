import * as React from 'react';
import { DataContext } from 'App';
import { Footer } from '.';

export class FooterContainer extends React.Component<ILoadedState, {}> {
	constructor(props: ILoadedState) {
		super(props);
		this.state = {};
	}
	public render(): JSX.Element {
		return (
			<DataContext.Consumer>
				{(dataContext: IDataContext): JSX.Element => {
					return <Footer footerText={dataContext.textKeys.global.footer} />;
				}}
			</DataContext.Consumer>
		);
	}
}
