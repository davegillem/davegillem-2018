import * as React from 'react';
import { DataContext } from 'App';
import { Resume } from 'components';

export class ResumeContainer extends React.Component<ILoadedState, any> {
	constructor(props: ILoadedState) {
		super(props);
		this.state = {};
	}
	public render() {
		return (
			<DataContext.Consumer>
				{(dataContext: any) => (
					<Resume
						{...dataContext.pages.resume}
						textKeys={dataContext.textKeys}
						education={dataContext.education}
						work={dataContext.work}
						references={dataContext.references}
					/>
				)}
			</DataContext.Consumer>
		);
	}
}
