import * as React from 'react';

export interface IFooterProps {
	footerText: string;
}

export const Footer: React.SFC<IFooterProps> = (props): React.ReactElement<any> => {
	return (
		<footer className="footer" itemScope={true} itemType="http://schema.org/WPFooter">
			<div className="container">
				<div className="content has-text-centered">
					<p>{props.footerText}</p>
				</div>
			</div>
		</footer>
	);
};
