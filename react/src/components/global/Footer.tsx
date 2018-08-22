import * as React from 'react';

export interface IFooterProps {
	footerText?: string;
}

export class Footer extends React.Component<IFooterProps, any> {
	public render(): React.ReactNode {
		return (
			<footer className="footer" itemScope={true} itemType="http://schema.org/WPFooter">
				<div className="container">
					<div className="content has-text-centered">
						<p>{this.props.footerText}</p>
					</div>
				</div>
			</footer>
		);
	}
}
