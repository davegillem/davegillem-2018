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
	constructor(props: ILoadedState) {
		super(props);
		this.state = {
			education: [],
			isLoading: true,
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
		console.log('RESULT', this.state);
	};
	public componentDidMount() {
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
				{this.state.isLoading ? (
					<PageLoader />
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
