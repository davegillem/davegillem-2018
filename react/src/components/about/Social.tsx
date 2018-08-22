import * as React from 'react';
// import { SocialItem } from './';
export interface ISocialProps extends ILoadedState {
	temp?: string;
}

export class Social extends React.Component<ISocialProps, any> {
	public render() {
		return (
			<div>
				{/* <div id='socialLinks' v-bindclassName='[showLoader ? 'hideView' : 'showView']'>
					<ul className='social-networks square spin-icon'>
					{this.props.social.map((link, index) => {
						return(
							<li key='link.id' data-dgtip='link.title.rendered'>
							<a :href='link.url' className=''icon-'+link.slug' className='icon' target='_blank' rel='noopener noreferrer'>{link.title.rendered}</a>
						</li>
						)
					})}
					</ul>
				</div> */}
			</div>
		);
	}
}
