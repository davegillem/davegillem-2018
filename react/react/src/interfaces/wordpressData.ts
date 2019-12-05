interface IRenderedContent {
	rendered: string;
}

interface IWPData {
	id: number;
	slug: string;
	title: IRenderedContent;
}
interface IPageData extends IWPData {
	content: IRenderedContent;
}
interface IPage {
	[pageName: string]: IPageData;
}

// interface ITextKeys {
// 	[keyName: string]: string;
// }

interface ISocialAccountData extends IWPData {
	category: string;
	url: string;
}

interface IEmployerData extends IWPData {
	position: string;
	start_date: string;
	still_employed: string;
	end_date: string;
	location: string;
	additional: string;
	content: IRenderedContent;
}

interface IEmployerProps extends IEmployerData {
	additionalText: string;
	presentText: string;
}

interface IEducationData extends IWPData {
	award: string;
	completion: string;
	location: string;
	provider: string;
	course_type: string;
	content: IRenderedContent;
}

interface IReferenceData extends IWPData {
	date_provided: string;
	job_title: string;
	content: IRenderedContent;
}

interface IServerData {
	education: IEducationData[];
	pageItems: IPageData[];
	references: IReferenceData[];
	social: ISocialAccountData[];
	work: IEmployerData[];
}
