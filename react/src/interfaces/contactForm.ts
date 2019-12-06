interface IContactFields {
	contactEmail: string;
	contactMsg: string;
	contactName: string;
}
interface IContactForm extends IContactFields {
	errors?: IValidationError; // Map<string, IFieldError>;
	formSubmitted: boolean;
}

/*
 * Type items copied from flow types found in the ree-validator repo
 * https://github.com/moeen-basra/ree-validate/tree/master/flow
 */
/* eslint-disable */
