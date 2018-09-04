import * as React from 'react';
import {
	getData,
	getEducation,
	getEmployers,
	getPages,
	getReferences,
	getSocial,
	getTextKeys,
	startLogger
	} from 'utilities';
import { MainContainer } from 'pages';
import { Navbar, PageLoader } from 'components';

startLogger();

interface IAppState {
	education: IEducationData[];
	isLoading: boolean;
	loaderAnimating: boolean;
	mobileMenuOpen: boolean;
	pages: IPage;
	pageItems: IPageData[];
	references: IReferenceData[];
	social: ISocialAccountData[];
	textKeyData: ITextKeyData[];
	textKeys: ITextKeys;
	work: IEmployerData[];
}

export const DataContext = React.createContext({} as IAppState);

export class App extends React.Component<ILoadedState, IAppState> {
	public loadingID: string = 'loadingLogo';
	constructor(props: ILoadedState) {
		super(props);
		this.state = {
			education: [],
			isLoading: true,
			loaderAnimating: false,
			mobileMenuOpen: false,
			pageItems: [],
			pages: {},
			references: [],
			social: [],
			textKeyData: [],
			textKeys: {},
			work: []
		};
	}
	public processData = (wpData: IAppState) => {
		const tempPages: IPage = {};
		const tempKeys: ITextKeys = {};
		const { pageItems, textKeyData, ...other }: IAppState = wpData;
		pageItems.map(page => {
			tempPages[page.slug] = page;
		});
		textKeyData.map(key => {
			tempKeys[key.slug] = key.description;
		});
		this.setState({ pages: tempPages, textKeys: tempKeys, ...other, isLoading: false });
	};
	public whichAnimationEvent = (): string => {
		const el: any = document.getElementById(this.loadingID);
		const animations: object = {
			animation: 'animationend',
			MozAnimation: 'animationend',
			OAnimation: 'oAnimationEnd',
			WebkitAnimation: 'webkitAnimationEnd'
		};
		for (const t in animations) {
			if (el.style[t] !== undefined) {
				return animations[t];
			}
		}
		return '';
	};
	public componentDidMount() {
		// check to see if logo is done animating so it doesn't cut off
		const el: any = document.getElementById(this.loadingID);
		const animationEvent = this.whichAnimationEvent();
		el.addEventListener(animationEvent, () => {
			this.setState({ loaderAnimating: false });
		});
		try {
			Promise.all<
				Promise<IPageData[]>,
				Promise<ITextKeyData[]>,
				Promise<ISocialAccountData[]>,
				Promise<IEmployerData[]>,
				Promise<IEducationData[]>,
				Promise<IReferenceData[]>
			>([
				getData(getPages),
				getData(getTextKeys),
				getData(getSocial),
				getData(getEmployers),
				getData(getEducation),
				getData(getReferences)
			]).then(([pageItems, textKeyData, social, work, education, references]) => {
				const wpData: any = {
					education: education,
					pageItems: pageItems,
					references: references,
					social: social,
					textKeyData: textKeyData,
					work: work
				};
				console.log('GET DATA', wpData);
				this.processData(wpData);
			});
		} catch (err) {
			console.log(err);
		}
	}
	public setMobileMenu = (menuOpen: boolean) => {
		this.setState({ mobileMenuOpen: menuOpen });
	};
	public render(): React.ReactNode {
		return (
			<div id="appMain" itemScope={true} itemType="http://schema.org/WebPage">
				{this.state.isLoading || this.state.loaderAnimating ? (
					<PageLoader loadingID={this.loadingID} />
				) : (
					<DataContext.Provider value={this.state}>
						<Navbar setMenuState={this.setMobileMenu} />
						<MainContainer mobileNav={this.state.mobileMenuOpen} />
					</DataContext.Provider>
				)}
			</div>
		);
	}
}
