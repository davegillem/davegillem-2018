import * as React from 'react';
import { DataContext } from 'App';
import { Footer } from '.';

export class FooterContainer extends React.Component<ILoadedState, any> {
	constructor(props: ILoadedState) {
		super(props);
		this.state = {};
	}
	public fixDate = (str: string): string => {
		const currentYear: string = String(new Date().getFullYear());
		return str.replace('${CURR_YEAR}', currentYear);
	};
	public render() {
		return (
			<DataContext.Consumer>
				{(dataContext: any) => <Footer footerText={this.fixDate(dataContext.textKeys.global_footer)} />}
			</DataContext.Consumer>
		);
	}
}
