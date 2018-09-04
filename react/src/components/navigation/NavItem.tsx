import * as React from 'react';
import { NavLink } from 'react-router-dom';

interface INavItemProps {
	label: string;
	path: string;
}
// document.getElementById("main-content").scrollTop = 0;
export const NavItem: React.SFC<INavItemProps> = (props: INavItemProps): React.ReactElement<any> => {
	return (
		<div className="appNavLink">
			<NavLink to={props.path} exact={true} className="" activeClassName="is-active" data-hover={props.label}>
				{props.label}
			</NavLink>
		</div>
	);
};
