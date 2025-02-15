import * as React from 'react';
import { DataContext } from 'App';
import { Resume } from 'components';

export class ResumeContainer extends React.Component<ILoadedState, {}> {
	constructor(props: ILoadedState) {
		super(props);
		this.state = {};
	}
	public render(): React.ReactNode {
		return (
			<DataContext.Consumer>
				{(dataContext: IDataContext): React.ReactNode => {
					return (
						<Resume
							{...dataContext.pages.resume}
							textKeys={dataContext.textKeys}
							education={dataContext.education}
							work={dataContext.work}
							references={dataContext.references}
						/>
					);
				}}
			</DataContext.Consumer>
		);
	}
}
