interface ITextKeys {
	buttonKeys: IButtonKeys;
	changePasswordKeys: IChangePasswordKeys;
	deviceKeys: IDeviceKeys;
	errorKeys: IErrorKeys;
	footerKeys: IFooterKeys;
	globalKeys: IGlobalKeys;
	headerKeys: IHeaderKeys;
	iconKeys: IIconKeys;
	launchpadKeys: ILaunchpadKeys;
	loginKeys: ILoginKeys;
	navKeys: INavKeys;
	secondaryNavKeys: ISecondaryNavKeys;
	securityKeys: ISecurityKeys;
}

type ISecurityKeys = IKeyValuePair;
type IButtonKeys = IKeyValuePair;
type IChangePasswordKeys = IKeyValuePair;
type IGlobalKeys = IKeyValuePair;
type ILaunchpadKeys = IKeyValuePair;

interface IDeviceKeys {
	addNewMethodOrDevice: string;
	areYouSureDelete: string;
	authenticatorAdded: string;
	chooseMethod: string;
	closeWithoutVerification: string;
	confirmDeviceDelete: string;
	connectSteps: string[];
	connectStepsHeader: string;
	deleteVerifyHeader: string;
	deviceModalBtnNext_panel1: string;
	deviceModalBtnNext_panel10: string;
	deviceModalBtnNext_panel11: string;
	deviceModalBtnNext_panel12: string;
	deviceModalBtnNext_panel2: string;
	deviceModalBtnNext_panel3: string;
	emailLabels: IEmailLabels;
	enterCodeLabel: string;
	errorMessages: IErrorMessages;
	headerLabel: string;
	letsVerifyLabel: string;
	letsTryItOut: string;
	noDevices: string;
	nowYouCanUse: string;
	oneTimeCodeSent: string;
	oneTimeCodeWillSend: string;
	panelOneHeader: string;
	panelThreeHeader: string;
	panelTwoHeader: string;
	phoneLabels: IPhoneLabels;
	pleaseVerifyPushNotification: string;
	pleaseVerifyPushTitle: string;
	registerTOTPHeader: string;
	removeAuthenticatorLabel: string;
	removeDeviceContent: string[];
	removeDeviceLabel: string;
	removeDevicePrimaryText: string;
	removeTotpDeviceContent: string;
	removeTotpDeviceHeader: string;
	secondaryDeviceModalBtnLabel: string;
	sectionLabel_Email: string;
	sectionLabel_IBMVerify: string;
	sectionLabel_Phone: string;
	sectionLabel_Totp: string;
	sendAccessCode: string;
	setupAuthLabel: string;
	successLabel: string;
	testDeviceLabel: string;
	thirdPartyDownloadSteps: string[];
	thirdPartyDownloadStepsHeader: string;
	thirdPartyDownloadStepsLabel: string;
	thirdPartyLabel: string;
	toVerify: string;
	totpInvalid: string;
	totpRemovedSuccess: string;
	totpTestSuccess: string;
	twoStepLabel: string;
	verifyCard: IVerifyCard;
	verifyDeviceHeader: string;
	verifyDownloadSteps: string[];
	verifyDownloadStepsHeader: string;
	verifyInputInvalidText: string;
	verifyInputLabel: string;
	verifyInputPlaceholder: string;
	verifyLabelDeny: string;
	verifyLabelSuccess: string;
	verifyLabelTimeout: string;
	verifyMessage1: string;
	verifyMessage2: string;
	youCanAddOrRemove: string;
}

interface IVerifyCard {
	dateAddedLabel: string;
	deviceTypeLabel: string;
	emailTypeLabel: string;
	phoneTypeLabel: string;
}

interface IErrorMessages {
	getAuthClientsError: string;
	getVerifyError: string;
	initError: string;
	initVerifyError: string;
	newDeviceError: string;
	noConfiguredAuthenticators: string;
	removeDeviceError: string;
	sendVerifyError: string;
}

interface IEmailLabels {
	disable: string;
	delete: string;
	emailAdded: string;
	emailAddress: string;
	enterEmail: string;
	enterYourEmail: string;
	verifyYourEmail: string;
}

interface IPhoneLabels {
	disable: string;
	delete: string;
	enterNumber: string;
	enterNumberWithAreaCode: string;
	mobileNumber: string;
	phoneNumber: string;
	phoneAdded: string;
	verifyPhone: string;
}

interface IErrorKeys {
	abort: string;
	default: string;
	emptyKBAs: string;
	error: string;
	FORM_VALIDATION_ERROR: string;
	MAX_LENGTH_VIOLATION: string;
	parsererror: string;
	refreshTimer: string;
	sessionTimeout: string;
	timeout: string;
}

interface IFooterKeys {
	footerLabel: string;
}

interface IHeaderKeys {
	adminSwitchLabel: string;
	changePasswordLabel: string;
	logoutLabel: string;
	securityNavLabel: string;
}

interface IIconKeys {
	titleApplication: string;
	titleCIHeaderMenu: string;
	titleHelp: string;
	titleNotification: string;
	titleSearch: string;
	titleUser: string;
}

interface ILoginKeys {
	headerLabel: string;
	loggingInLabel: string;
	loginCILabel: string;
}

interface INavKeys {
	launchpadNavLabel: string;
}

interface ISecondaryNavKeys {
	switchClassicNavLabel: string;
}
