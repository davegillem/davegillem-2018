interface IContactFields {
	contactEmail: string;
	contactMsg: string;
	contactName: string;
}
interface IContactForm extends IContactFields {
	errors: any;
}
