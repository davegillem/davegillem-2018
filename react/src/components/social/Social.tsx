import * as React from 'react';
import { SocialItem } from '.';
export interface ISocialProps {
	socialItems: ISocialAccountData[];
}

export const Social: React.StatelessComponent<ISocialProps> = (props: ISocialProps): JSX.Element => {
	return (
		<div>
			<div id='socialLinks' className='showView'>
				<ul className='social-networks square'>
					{props.socialItems.map((link: ISocialAccountData) => {
						return <SocialItem key={link.id} {...link} />;
					})}
				</ul>
			</div>
		</div>
	);
};
