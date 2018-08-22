import * as React from 'react';
import { LoadingLogo } from 'assets/svg/loadingLogo.svg';

export class PageLoader extends React.Component<{}, {}> {
	public render(): React.ReactNode {
		return (
			<div className="loading">
				<LoadingLogo />
			</div>
		);
	}
}
