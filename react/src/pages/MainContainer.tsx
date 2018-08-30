import * as React from 'react';
import { FooterContainer, SocialContainer } from 'components';
import { Router } from 'pages';

interface IMainContainerProps extends ILoadedState {
	mobileNav: boolean;
}

export class MainContainer extends React.Component<IMainContainerProps, {}> {
	constructor(props: IMainContainerProps) {
		super(props);
		this.state = {};
	}
	public render(): React.ReactNode {
		return (
			<div
				id="main-content"
				className={'content-wrapper' + (this.props.mobileNav ? ' open' : '')}
				itemProp="mainContentOfPage"
			>
				<section className="section">
					<Router />
					<SocialContainer />
				</section>
				<FooterContainer />
			</div>
		);
	}
}
