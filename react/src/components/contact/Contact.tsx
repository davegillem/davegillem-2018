import * as React from 'react';

export interface IContactProps extends IPageData {
	textKeys: ITextKeys;
}
export interface IContactState extends IContactForm {
	formComplete: boolean;
	formSubmitted: boolean;
}

export class Contact extends React.Component<IContactProps, IContactState> {
	constructor(props: IContactProps) {
		super(props);
		this.state = {
			contactEmail: '',
			contactMsg: '',
			contactName: '',
			errorEmail: false,
			errorMessage: false,
			errorName: false,
			formComplete: false,
			formSubmitted: false
		};
	}

	public render(): React.ReactNode {
		return (
			<div className="container" id="contact-form" itemScope={true} itemType="http://schema.org/ContactPage">
				<div
					id="contact-content"
					className="contact-buzzoff"
					dangerouslySetInnerHTML={{ __html: this.props.content.rendered }}
				/>
				<form
					id="contact-dg-form"
					accept-charset="UTF-8"
					action="https://usebasin.com/f/60d54aefd589"
					encType="multipart/form-data"
					method="POST"
					onSubmit={this.validateBeforeSubmit}
					className={this.state.formSubmitted ? 'submitted' : 'thankyou'}
				>
					<div className="field">
						<label className="label">
							{this.props.textKeys.contact_name}
							<span className="required" />
						</label>
						<div className="control">
							<input
								name="contactName"
								id="contactName"
								value={this.state.contactName}
								className={'input' + (this.state.errorName ? ' is-danger' : '')}
								type="text"
								required={true}
								placeholder={this.props.textKeys.contact_namedefault}
								onChange={this.handleChange}
							/>
							{this.state.errorName && (
								<span className="help is-danger">{this.props.textKeys.errors_namerequired}</span>
							)}
						</div>
					</div>
					<div className="field">
						<label className="label">
							{this.props.textKeys.contact_email}
							<span className="required" />
						</label>
						<div className="control has-icons-left has-icons-right">
							<input
								name="contactEmail"
								id="contactEmail"
								value={this.state.contactEmail}
								className={'input' + (this.state.errorEmail ? ' is-danger' : '')}
								type="email"
								required={true}
								placeholder={this.props.textKeys.contact_emaildefault}
								onChange={this.handleChange}
							/>
							<span className="icon is-small is-left">
								<i className="fas fa-envelope" />
							</span>
							{this.state.errorEmail && (
								<span className="help is-danger">{this.props.textKeys.errors_emailrequired}</span>
							)}
						</div>
					</div>
					<div className="field">
						<label className="label">
							{this.props.textKeys.contact_message}
							<span className="required" />
						</label>
						<div className="control">
							<textarea
								name="contactMsg"
								id="contactMsg"
								value={this.state.contactMsg}
								className={'textarea' + (this.state.errorMessage ? ' is-danger' : '')}
								required={true}
								placeholder={this.props.textKeys.contact_messagedefault}
								onChange={this.handleChange}
							/>
							{this.state.errorMessage && (
								<span className="help is-danger">{this.props.textKeys.errors_msgrequired}</span>
							)}
						</div>
					</div>
					<div className="field is-grouped">
						<div className="control">
							<button className="button is-link" disabled={!this.state.formComplete}>
								{this.props.textKeys.btn_submit}
							</button>
						</div>
						<div className="control">
							<button className="button is-text" onClick={this.resetForm}>
								{this.props.textKeys.btn_cancel}
							</button>
						</div>
					</div>
				</form>
				{this.state.formSubmitted && (
					<div className="thankyou">
						<h2>{this.props.textKeys.contact_thankyou}</h2>
					</div>
				)}
			</div>
		);
	}
	private handleChange = (event: any): void => {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		} as Pick<IContactForm, keyof IContactForm>);
	};
	private resetForm = (): void => {
		this.setState({
			contactEmail: '',
			contactMsg: '',
			contactName: ''
		});
	};
	private validateBeforeSubmit = (): void => {
		// this.$validator.validateAll().then((result) => {
		// 	if (result) {
		// 		this.formSubmitted = true;
		// 		return true;
		// 	}else{
		// 		e.preventDefault();
		// 		return false;
		// 	}
		// });
		console.log('VALIDATING FORM');
	};
}
// const EventBus = new Vue();
// const dict = {
// 	custom: {
// 		contactName: {
// 			required: 'Sorry I don't speak subliminal, you need an actual name here'
// 		},
// 		contactEmail: {
// 			required: 'Pretty simple concept, where do you get your digital communications delivered??',
// 			email: 'Dude, come on you know what an email address looks like!'
// 		},
// 		contactMsg: {
// 			required: 'Did you forget why you were here?'
// 		}
// 	}
// };
// Validator.localize('en', dict);
// Vue.use(VeeValidate);

// export default {
// 	name: 'Contact',
// 	props: [],
// 	data() {return {
// 		formSubmitted: false,
// 		contactMsg: '',
// 		contactEmail:'',
// 		contactName:''
// 	}},
// 	computed: {
// 		isComplete () {
// 			return this.contactMsg !== '' && this.contactEmail !== '' && this.contactName !== '';
// 		}
// 	},
// 	methods: {
// 		resetForm(){
// 			this.contactMsg	= '';
// 			this.contactEmail='';
// 			this.contactName='';
// 		},
// 		validateBeforeSubmit() {
// 			this.$validator.validateAll().then((result) => {
// 				if (result) {
// 					this.formSubmitted = true;
// 					return true;
// 				}else{
// 					e.preventDefault();
// 					return false;
// 				}
// 			});
// 		}
// 	},
// 	created() {},
// };
