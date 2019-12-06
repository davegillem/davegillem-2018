import * as React from 'react';
import { getData, getEducation, getEmployers, getPages, getReferences, getSocial, startLogger } from 'utilities';
import { MainContainer } from 'pages';
import { Navbar, PageLoader } from 'components';
import { TEXT_KEYS } from 'data';

startLogger();

interface IAppState extends IServerData {
	isLoading: boolean;
	loaderAnimating: boolean;
	mobileMenuOpen: boolean;
	pages: IPage;
	textKeys: ITextKeys;
}

export const DataContext: React.Context<IAppState> = React.createContext({} as IAppState);

export class App extends React.Component<ILoadedState, IAppState> {
	public loadingID: string = 'loadingLogo';
	constructor(props: ILoadedState) {
		super(props);
		this.state = {
			education: [],
			isLoading: true,
			loaderAnimating: true,
			mobileMenuOpen: false,
			pageItems: [],
			pages: {},
			references: [],
			social: [],
			textKeys: TEXT_KEYS,
			work: [],
		};
	}
	public processData: IArrowFunction = (serverData: IServerData): void => {
		const tempPages: IPage = {};
		const { pageItems, ...other }: IServerData = serverData;

		pageItems.map((page: IPageData): void => {
			tempPages[page.slug] = page;
		});
		this.setState({ pages: tempPages, ...other, isLoading: false });
	};
	public whichAnimationEvent: IArrowFunction = (): string => {
		const el: HTMLElement | null = document.getElementById(this.loadingID);
		const animations: object = {
			animation: 'animationend',
			MozAnimation: 'animationend',
			OAnimation: 'oAnimationEnd',
			WebkitAnimation: 'webkitAnimationEnd',
		};

		if (el) {
			for (const t in animations) {
				if (el.style[t] !== undefined) {
					return animations[t];
				}
			}
		}

		return '';
	};
	public componentDidMount(): void {
		// check to see if logo is done animating so it doesn't cut off
		const el: HTMLElement | null = document.getElementById(this.loadingID);
		const animationEvent: string = this.whichAnimationEvent();

		if (el) {
			el.addEventListener(animationEvent, () => {
				this.setState({ loaderAnimating: false });
			});
		}
		const apiCalls: [
			Promise<IPageData[]>,
			Promise<ISocialAccountData[]>,
			Promise<IEmployerData[]>,
			Promise<IEducationData[]>,
			Promise<IReferenceData[]>,
		] = [
			getData(getPages),
			getData(getSocial),
			getData(getEmployers),
			getData(getEducation),
			getData(getReferences),
		];

		try {
			Promise.all<IPageData[], ISocialAccountData[], IEmployerData[], IEducationData[], IReferenceData[]>(
				apiCalls,
			).then(
				([pageItems, social, work, education, references]: [
					IPageData[],
					ISocialAccountData[],
					IEmployerData[],
					IEducationData[],
					IReferenceData[],
				]): IPromiseResponse => {
					const serverData: IServerData = {
						education: education,
						pageItems: pageItems,
						references: references,
						social: social,
						work: work,
					};

					this.processData(serverData);
				},
			);
		} catch (err) {
			console.log(err);
		}
	}
	public setMobileMenu: IArrowFunction = (menuOpen: boolean): void => {
		this.setState({ mobileMenuOpen: menuOpen });
	};
	public render(): React.ReactNode {
		return (
			<div id='appMain' itemScope={true} itemType='http://schema.org/WebPage'>
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
