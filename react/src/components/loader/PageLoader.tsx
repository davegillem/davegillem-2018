import * as React from 'react';
import { AnimatedLogo } from 'components';

interface IPageLoaderProps {
	loadingID: string;
}

export const PageLoader: React.SFC<IPageLoaderProps> = (props: IPageLoaderProps): React.ReactElement<any> => {
	return (
		<div className='loading'>
			<AnimatedLogo id={props.loadingID} />
		</div>
	);
};
