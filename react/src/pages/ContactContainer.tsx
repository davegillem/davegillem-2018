import * as React from 'react';
import { Contact } from 'components';
import { DataContext } from 'App';

export class ContactContainer extends React.Component<ILoadedState, any> {
	constructor(props: any) {
		super(props);
		this.state = {};
	}
	public render() {
		return (
			<DataContext.Consumer>
				{(dataContext: any) => <Contact {...dataContext.pages.contact} textKeys={dataContext.textKeys} />}
			</DataContext.Consumer>
		);
	}
}
