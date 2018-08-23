import * as React from 'react';
import {
	AboutContainer,
	ContactContainer,
	HomeContainer,
	ResumeContainer
	} from 'pages';
import { HashRouter, Route, Switch } from 'react-router-dom';

const Router: React.StatelessComponent<{}> = props => (
	<HashRouter>
		<Switch>
			<Route path="/" component={HomeContainer} />
			<Route path="/about" exact={true} component={AboutContainer} />
			<Route path="/resume" exact={true} component={ResumeContainer} />
			<Route path="/contact" exact={true} component={ContactContainer} />
			<Route component={HomeContainer} />
			{/*linkActiveClass: 'is-active' */}
		</Switch>
	</HashRouter>
);

export default Router;
