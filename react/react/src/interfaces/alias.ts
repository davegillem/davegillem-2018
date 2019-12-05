/*
 * Type aliases that can be used in code but have no valid way to assign a type as of yet
 ! SHOULD NOT BE OVERUSED OR AS A REPLACEMENT TO A VALID INTERFACE WHEN POSSIBLE
*/
/* eslint-disable */
type IEvent = any;
type IPromise = any;
type IPromiseResponse = any;
type IArrowFunction = any;
type IContext = any;
type IValidator = any; // ree-validate type
type IValidationError = any; // ree-validate error type
type IValidationSuccess = any; // ree-validate success type

interface IKeyValuePair {
	[key: string]: any;
}
/* eslint-enable */
