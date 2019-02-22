/*
 * Type aliases that can be used in code but have no valid way to assign a type as of yet
 ! SHOULD NOT BE OVERUSED OR AS A REPLACEMENT TO A VALID INTERFACE WHEN POSSIBLE
*/
/* tslint:disable */
type IEvent = any;
type IPromise = any;
type IPromiseResponse = any;
type IPromiseReject = any;
type IDynamicType = Pick<any, any>;
type IPrivateRouteProps = any;
type ISession = any;
type IArrowFunction = any;
type IContext = any;

interface IKeyValuePair {
	[key: string]: any;
}
/* tslint:enable */
