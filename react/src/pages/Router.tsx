import * as React from 'react';
import { AboutContainer, ContactContainer, HomeContainer, ResumeContainer } from 'pages';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { HashRouter, Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';
const transTimeout: number = 500;

export const Router: React.StatelessComponent<{}> = (): JSX.Element => {
	return (
		<HashRouter>
			<Route
				render={({ location }: RouteComponentProps): JSX.Element => {
					return (
						<TransitionGroup appear={false}>
							<CSSTransition
								key={location.pathname}
								classNames='fade'
								timeout={transTimeout}
								appear={false}
							>
								<Switch location={location}>
									<Route path='/' exact={true} component={HomeContainer} />
									<Route path='/about' exact={true} component={AboutContainer} />
									<Route path='/resume' exact={true} component={ResumeContainer} />
									<Route path='/contact' exact={true} component={ContactContainer} />
									<Redirect to='/' />
								</Switch>
							</CSSTransition>
						</TransitionGroup>
					);
				}}
			/>
		</HashRouter>
	);
};
