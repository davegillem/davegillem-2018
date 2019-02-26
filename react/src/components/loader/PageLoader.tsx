import * as React from 'react';
import { AnimatedLogo } from 'components';

interface IPageLoaderProps {
	loadingID: string;
}

export const PageLoader: React.StatelessComponent<IPageLoaderProps> = (props: IPageLoaderProps): JSX.Element => {
	return (
		<div className='loading'>
			<AnimatedLogo id={props.loadingID} />
		</div>
	);
};
