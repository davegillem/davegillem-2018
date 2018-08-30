import * as React from 'react';

export const SocialItem: React.SFC<ISocialAccountData> = (props: ISocialAccountData): React.ReactElement<any> => {
	return (
		<li data-dgtip={props.title.rendered}>
			<a href={props.url} className={`icon icon-${props.slug}`} target="_blank" rel="noopener noreferrer">
				{props.title.rendered}
			</a>
		</li>
	);
};
