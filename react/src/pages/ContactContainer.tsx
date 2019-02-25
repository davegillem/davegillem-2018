import * as React from 'react';
import { Contact } from 'components';
import { DataContext } from 'App';

export class ContactContainer extends React.Component<ILoadedState, {}> {
	constructor(props: ILoadedState) {
		super(props);
		this.state = {};
	}
	public render(): React.ReactNode {
		return (
			<DataContext.Consumer>
				{(dataContext: IDataContext): React.ReactNode => {
					return (
						<Contact
							{...dataContext.pages.contact}
							textKeys={dataContext.textKeys}
						/>
					);
				}}
			</DataContext.Consumer>
		);
	}
}
