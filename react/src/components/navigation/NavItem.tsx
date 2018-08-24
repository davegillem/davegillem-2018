import * as React from 'react';
import { NavLink } from 'react-router-dom';

interface INavItemProps {
	label: string;
	path: string;
}

export const NavItem: React.SFC<INavItemProps> = (props): React.ReactElement<any> => {
	return (
		<div className="appNavLink">
			<NavLink to={props.path} exact={true} className="" data-hover={props.label}>
				{props.label}
			</NavLink>
		</div>
	);
};
