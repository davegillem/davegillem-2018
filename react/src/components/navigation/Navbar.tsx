import * as React from 'react';
import { DataContext } from 'App';
import { HashRouter as Router } from 'react-router-dom';
import { NavItem, SiteLogo, SocialItem } from 'components';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export interface INavbarProps extends ILoadedState {
	temp?: string;
	setMenuState: (isActive: boolean) => void;
}
export interface INavbarState {
	burgerActive?: boolean;
}

export class Navbar extends React.Component<INavbarProps, INavbarState> {
	constructor(props: INavbarProps) {
		super(props);
		this.state = {
			burgerActive: false
		};
	}

	public toggleBurger = () => {
		console.log('Burger Menu Clicked');
		const burgerActive: boolean = !this.state.burgerActive;
		this.setState({ burgerActive: burgerActive });
		this.props.setMenuState(burgerActive);
	};

	public render(): React.ReactNode {
		return (
			<nav
				className="showNav navbar is-fixed-top"
				itemScope={true}
				itemType="http://schema.org/SiteNavigationElement"
			>
				<DataContext.Consumer>
					{(dataContext: any) => (
						<>
							<div
								id="mobile-nav-icon"
								className={'burgerMenu' + (this.state.burgerActive ? ' open' : '')}
								onClick={this.toggleBurger}
							>
								<span />
								<span />
								<span />
							</div>
							<Router>
								<div id="appNavbar" className="">
									<NavItem path="/" label={dataContext.textKeys.nav_landing} />
									<NavItem path="/about" label={dataContext.textKeys.nav_about} />
									<SiteLogo href="/" id="dgLogo" />
									<NavItem path="/resume" label={dataContext.textKeys.nav_resume} />
									<NavItem path="/contact" label={dataContext.textKeys.nav_contact} />

									<div className="appNavLink socialMenu">
										<div className="has-dropdown is-hoverable">
											<div className="navbar-dropdown is-boxed">
												{dataContext.social.map((link: ISocialAccountData) => {
													return <SocialItem key={link.id} {...link} isMobile={true} />;
												})}
											</div>
										</div>
									</div>
								</div>
							</Router>
						</>
					)}
				</DataContext.Consumer>
			</nav>
		);
	}
}
