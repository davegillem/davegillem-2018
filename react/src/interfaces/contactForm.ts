interface IContactErrors {
	errorEmail: boolean;
	errorMessage: boolean;
	errorName: boolean;
}
interface IContactForm extends IContactErrors {
	contactEmail: string;
	contactMsg: string;
	contactName: string;
}
