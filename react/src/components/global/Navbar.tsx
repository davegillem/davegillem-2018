import * as React from 'react';

export interface INavbarProps extends ILoadedState {
	temp?: string;
}

export class Navbar extends React.Component<INavbarProps, any> {
	public render(): React.ReactNode {
		return (
			<div>
				{/* <nav v-bindclassName='[showLoader ? 'hideNav navbar is-fixed-top' : 'showNav navbar is-fixed-top']' itemScope={true} itemType='http://schema.org/SiteNavigationElement'>
			<div id='mobile-nav-icon' className='burgerMenu' @click='toggleBurger' className='{open: burgerActive}'>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div id='appNavbar' className=''>
				<div className='appNavLink'><router-link to='/' exact className='' data-hover='TL;DR'>TL;DR</router-link></div>
				<div className='appNavLink'><router-link to='/about' exact className='' data-hover='About'>About</router-link></div>
				<a className='logoHolder' href='#' itemScope={true} itemType='http://schema.org/WPHeader'>
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 250 500' alt='Dave Gillem Logo' id='dgLogo' itemProp='primaryImageOfPage'>
						<path d='M201.7 163.3c13.9 9.5 29 16.6 45.3 21.4 0 1.6-2.3 4.3-7.8 5.2-31.2 5.2-27.8 121.9-1.5 240.7-40.6 39-33.4 32.4-56 53.8-1.1 1-12 11.5-13.6 13-1.8.2-3.4-.7-3.3-2.8 0-1.3 7-6.5 6.1-7.3-15.1-13.7-45.1-26.8-78.9-26.8-26.5 0-55.3 8.1-81 30.3 29.7-48.3 64.6-63 96.1-63 40.8 0 75.9 24.5 86.8 32.6 2.5-1.8 7.2-6.6 10.9-11.4-5.9-15.4-14.9-59.1-20.6-116.8.3 2.8-4.9 8.7-14.8 17.6-9.9 8.9-27.6 25.5-53.1 49.9-2.2 0-3.3-1-3.3-2.9l7.7-11.4-4.8-3.8c-9.4-6.6-17.5-14-24.3-22.2-.4.2-.7.5-1.1.7-16.9 10.6-34.4 39.2-35.3 40.7-2.9 0-4.3-1-4.3-2.9 0-1.6 2.4-7.3 7.2-17.1l-5.3-3.8C18.3 353.7 1 320.6 1 277.6c0-26.3 7.5-50.6 22.5-72.9 15-22.3 34.6-40.1 58.9-53.5-3.2-4.4-9.2-11.7-17.9-21.9-8.8-10.1-15.2-20-20.1-29.2C23.6 61.4 44.5 18.2 69 1c-1.4 1.2-27.2 24.2-4.5 64.5 4.8 8.5 19.3 24.2 44 46.9 18.8 17.4 32.9 33.5 42.2 48.5 23-17 39-30.5 47.9-40.4l1.9 2.9c-13.1 13.9-19.6 21.7-19.6 23.3 0 1.6 6.9 7.1 20.8 16.6M81.3 227.2c6.4-11.3 16.3-23.1 29.9-35.4-2.9-5.7-6.3-11.1-10.1-16.1-9.3-12.3-14.6-19.4-15.9-21.3-31.6 19.2-47.4 54.4-47.4 105.4 0 26.2 5.7 46.6 17 61.2 7.4 9.6 15.5 16 24.2 19.3-8.7-16.7-13-36.1-13-58.2 0-18.3 5.1-36.6 15.3-54.9m99.6 96.7V199.4c0-1.9-4.9-6.2-14.8-13.1-1.6-1.1-3-2.1-4.4-3 5.9 15.7 8.9 31.2 8.9 46.6 0 39-14.6 72.8-43.7 101.5 9 9.5 18.9 14.3 29.7 14.3 6.1 0 11.6-2.6 16.8-7.7 4.9-5 7.5-9.7 7.5-14.1m-62.7-3.6c6.4-14.9 9.6-32.5 9.6-52.8 0-15.7-2.1-31.9-6.4-48.5-.6-2.3-1.3-4.6-2-6.8-7.9 16.1-11.9 36.2-11.9 60.2.1 19.8 3.7 35.8 10.7 47.9' className='dgLogoGroup dgLogoPath'/>
					</svg>
				</a>
				<div className='appNavLink'><router-link to='/resume' exact className='' data-hover='Resume'>Resume</router-link></div>
				<div className='appNavLink'><router-link to='/contact' exact className='' data-hover='Contact'>Contact</router-link></div>
				<div className='appNavLink socialMenu'>
					<div className='has-dropdown is-hoverable'>
						<div className='navbar-dropdown is-boxed'>
						{this.props.social.map((account, index) => {
							return(
								<social key='account.id' {...account}></social>
							)
						})}
							
						</div>
					</div>
				</div>
			</div>
		</nav> */}
			</div>
		);
	}
}
