interface ITextKeys {
	buttons: IButtons;
	contact: IContact;
	errors: IErrors;
	global: IGlobal;
	navKeys: INavKeys;
	resume: IResume;
}

interface IButtons {
	cancel: string;
	submit: string;
}

interface IContact {
	email: string;
	emailDefault: string;
	message: string;
	messageDefault: string;
	name: string;
	nameDefault: string;
	thankYou: string;
}

interface IErrors {
	contactEmailFormat: string;
	contactEmailRequired: string;
	contactMsgRequired: string;
	contactNameRequired: string;
}

interface IGlobal {
	additional: string;
	footer: string;
	present: string;
}

interface INavKeys {
	about: string;
	contact: string;
	landing: string;
	resume: string;
}

interface IResume {
	education: string;
	employers: string;
	references: string;
	resume: string;
}

// type ISecurityKeys = IKeyValuePair;
// type IButtonKeys = IKeyValuePair;
// type IChangePasswordKeys = IKeyValuePair;
// type IGlobalKeys = IKeyValuePair;
// type ILaunchpadKeys = IKeyValuePair;