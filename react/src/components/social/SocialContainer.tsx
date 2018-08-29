import * as React from 'react';

interface ISocialContainerProps extends ILoadedState {
	temp?: string;
}

export const SocialContainer: React.SFC<ISocialContainerProps> = (props): React.ReactElement<any> => {
	return (
		<div id="SocialContainer">
			{' '}
			{/* v-bind={true}className='[showLoader ? 'hideView={true}' : 'showView']'> */}
			<ul className="social-networks square spin-icon">
				{/* {this.props.social.map((link, index) => {
					return(
						<li key='link.id' data-dgtip='link.title.rendered'>
							<a :href='link.url' className=''icon-'+link.slug' className='icon' target='_blank' rel='noopener noreferrer'>{link.title.rendered}</a>
						</li>
					)
				})}
				 */}
			</ul>
		</div>
	);
};
