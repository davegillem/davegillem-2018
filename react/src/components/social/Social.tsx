import * as React from 'react';
import { SocialItem } from '.';
export interface ISocialProps {
	socialItems: ISocialAccountData[];
}

export const Social: React.SFC<ISocialProps> = (props: ISocialProps): React.ReactElement<any> => {
	return (
		<div>
			<div id="socialLinks" className="showView">
				<ul className="social-networks square spin-icon">
					{props.socialItems.map(link => {
						return <SocialItem key={link.slug} {...link} />;
					})}
				</ul>
			</div>
		</div>
	);
};
