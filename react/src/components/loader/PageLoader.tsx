import * as React from 'react';
import { AnimatedLogo } from 'components';

export const PageLoader: React.SFC<{}> = (): React.ReactElement<any> => {
	return (
		<div className="loading">
			<AnimatedLogo id="loadingLogo" />
		</div>
	);
};
