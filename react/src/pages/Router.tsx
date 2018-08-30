import * as React from 'react';
import {
	AboutContainer,
	ContactContainer,
	HomeContainer,
	ResumeContainer
	} from 'pages';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { HashRouter, Route, Switch } from 'react-router-dom';
const transTimeout: number = 500;

export const Router: React.StatelessComponent<{}> = props => (
	<HashRouter>
		<Route
			render={({ location }) => (
				<TransitionGroup>
					<CSSTransition key={location.pathname} classNames="fade" timeout={transTimeout} appear={true}>
						<Switch location={location}>
							<Route path="/" exact={true} component={HomeContainer} />
							<Route path="/about" exact={true} component={AboutContainer} />
							<Route path="/resume" exact={true} component={ResumeContainer} />
							<Route path="/contact" exact={true} component={ContactContainer} />
							<Route component={HomeContainer} />
						</Switch>
					</CSSTransition>
				</TransitionGroup>
			)}
		/>
	</HashRouter>
);
