import * as React from 'react';

export interface ISocialItemProps {
	temp?: string;
}

export class SocialItem extends React.Component<ISocialItemProps, any> {
	public render() {
		return (
			<div>
				{/* <a className='navbar-item nestedLink' className=''icon-menu-'+this.props.slug' :href='this.props.url' target='_blank' rel='noopener noreferrer'>
		{{this.props.title.rendered}}
	</a> */}
			</div>
		);
	}
}
