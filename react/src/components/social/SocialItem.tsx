import * as React from 'react';

interface ISocialItemProps extends ISocialAccountData {
	isMobile?: boolean;
}

const getSocialLink = (linkData: ISocialItemProps, classList: string) => {
	return (
		<a href={linkData.url} className={classList} target="_blank" rel="noopener noreferrer">
			{linkData.title.rendered}
		</a>
	);
};

export const SocialItem: React.SFC<ISocialItemProps> = (props: ISocialItemProps): React.ReactElement<any> => {
	return (
		<>
			{props.isMobile ? (
				getSocialLink(props, `navbar-item nestedLink icon-menu-${props.slug}`)
			) : (
				<li data-dgtip={props.title.rendered}>{getSocialLink(props, `icon icon-${props.slug}`)}</li>
			)}
		</>
	);
};
