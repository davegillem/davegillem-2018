const CURR_YEAR = new Date().getFullYear();

export const textKeys = {
	buttons: {
		cancel: 'Cancel',
		submit: 'Submit',
	},
	contact: {
		email: 'Email Address',
		emailDefault: 'Where do you get email?',
		message: 'Message',
		messageDefault: 'What do you want me to know?',
		name: 'Name',
		nameDefault: 'What do people call you?',
		thankYou: "Thank you, I'll be in touch... maybe...",
	},
	errors: {
		contactEmailFormat: 'Dude, come on you know what an email address looks like!',
		contactEmailRequired: 'Pretty simple concept, where do you get your digital communications delivered??',
		contactMsgRequired: 'Did you forget why you were here?',
		contactNameRequired: "Sorry I don't speak subliminal, you need an actual name here",
	},
	global: {
		additional: 'ADDITIONAL:',
		footer: `© 1998 - ${CURR_YEAR} Dave Gillem . all rights reserved {build your own}.`,
		present: 'Present',
	},
	navKeys: {
		about: 'About',
		contact: 'Contact',
		landing: 'TL;DR',
		resume: 'Résumé',
	},
	resume: {
		education: 'Education / Certifications',
		employers: 'Employers',
		references: 'References',
		resume: 'Résumé',
	},
};

// *********************** PUBLIC METHODS ************************* //
export const getKeys = (keyset: string) => {
	return keyset ? textKeys[keyset] : textKeys;
};
