const CURR_YEAR: string = new Date().getFullYear().toString();

export const TEXT_KEYS: ITextKeys = {
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
		emailFormat: 'Dude, come on you know what an email address looks like!',
		emailRequired: 'Pretty simple concept, where do you get your digital communications delivered??',
		msgRequired: 'Did you forget why you were here?',
		nameRequired: "Sorry I don't speak subliminal, you need an actual name here",
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
