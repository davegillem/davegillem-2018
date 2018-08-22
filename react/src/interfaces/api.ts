interface IFetchHeader {
	[headerName: string]: string;
}
interface IDataMethod {
	endpoint: string;
	headers: IFetchHeader;
	method: string;
}
