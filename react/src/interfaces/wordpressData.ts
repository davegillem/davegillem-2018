interface IRenderedContent {
	rendered: string;
}

interface IPageData {
	id: number;
	slug: string;
	title: IRenderedContent;
	content: IRenderedContent;
}
interface IPage {
	[pageName: string]: IPageData;
}

// interface ITextKeyData {
// 	id: number;
// 	description: string;
// 	slug: string;
// }
// interface ITextKeys {
// 	[keyName: string]: string;
// }

interface ISocialAccountData {
	id: number;
	slug: string;
	url: string;
	category: string;
	title: IRenderedContent;
}

interface IEmployerData {
	id: number;
	slug: string;
	position: string;
	start_date: string;
	still_employed: string;
	end_date: string;
	location: string;
	additional: string;
	title: IRenderedContent;
	content: IRenderedContent;
}

interface IEmployerProps extends IEmployerData {
	additionalText: string;
	presentText: string;
}

interface IEducationData {
	id: number;
	slug: string;
	award: string;
	completion: string;
	location: string;
	provider: string;
	course_type: string;
	title: IRenderedContent;
	content: IRenderedContent;
}

interface IReferenceData {
	id: number;
	slug: string;
	date_provided: string;
	job_title: string;
	title: IRenderedContent;
	content: IRenderedContent;
}

interface IServerData {
	education: IEducationData[];
	pageItems: IPageData[];
	references: IReferenceData[];
	social: ISocialAccountData[];
	work: IEmployerData[];
}