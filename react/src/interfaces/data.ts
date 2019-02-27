// API types
type IFetchHeader = Headers | string[][] | Record<string, string> | undefined;
// interface IFetchHeader {
// 	[headerName: string]: string;
// }
interface IDataMethod {
	endpoint: string;
	headers: IFetchHeader;
	method: string;
}
type IDataContext = IContext;

interface IHTTPStatus {
	empty: { [key: string]: boolean };
	forbidden: { [key: string]: boolean };
	redirect: { [key: string]: boolean };
	retry: { [key: string]: boolean };
	success: { [key: string]: boolean };
	unauthorized: { [key: string]: boolean };
}

interface IUrlHelper {
	generateNonce: (length: number) => string;
	getAuthUrl: (authEndpoint: string, nonce: string) => string;
	getParams: (url: string) => {};
}
