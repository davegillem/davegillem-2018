import * as React from 'react';
import classnames from 'classnames';
import ReeValidate from 'ree-validate';

export interface IContactProps extends IPageData {
	textKeys: ITextKeys;
}
export interface IContactState extends IContactForm {
	formSubmitted: boolean;
}

export class Contact extends React.Component<IContactProps, IContactState> {
	public validator: any;
	constructor(props: IContactProps) {
		super(props);
		this.validator = new ReeValidate({
			contactEmail: 'required|email',
			contactMsg: 'required|min:3',
			contactName: 'required|min:3'
		});
		this.state = {
			contactEmail: '',
			contactMsg: '',
			contactName: '',
			errors: this.validator.errors,
			// errorEmail: false,
			// errorMessage: false,
			// errorName: false,
			formSubmitted: false
		};

		//   this.state = {
		// 	formData: {
		// 	  email: '',
		// 	  password: '',
		// 	},
		// 	errors: this.validator.errors,
		//   }
		this.checkValidation = this.checkValidation.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.validateBeforeSubmit = this.validateBeforeSubmit.bind(this);
	}

	public render(): React.ReactNode {
		const { errors } = this.state;
		return (
			<div className="container" id="contact-form" itemScope={true} itemType="http://schema.org/ContactPage">
				<div
					id="contact-content"
					className="contact-buzzoff"
					dangerouslySetInnerHTML={{ __html: this.props.content.rendered }}
				/>
				<form
					id="contact-dg-form"
					// acceptCharset="UTF-8"
					// action="https://usebasin.com/f/60d54aefd589"
					// encType="multipart/form-data"
					// method="POST"
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
								className={classnames('input', { 'is-danger': errors.has('contactName') })}
								type="text"
								required={true}
								placeholder={this.props.textKeys.contact_namedefault}
								onChange={this.handleChange}
								onBlur={this.checkValidation}
								autoFocus={true}
							/>
							{errors.has('contactName') && (
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
								className={classnames('input', { 'is-danger': errors.has('contactEmail') })}
								type="email"
								required={true}
								placeholder={this.props.textKeys.contact_emaildefault}
								onChange={this.handleChange}
								onBlur={this.checkValidation}
							/>
							<span className="icon is-small is-left">
								<i className="fas fa-envelope" />
							</span>
							{errors.has('contactEmail') && (
								<span className="help is-danger">{this.props.textKeys.errors_emailformat}</span>
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
								className={classnames('textarea', { 'is-danger': errors.has('contactMsg') })}
								required={true}
								placeholder={this.props.textKeys.contact_messagedefault}
								onChange={this.handleChange}
								onBlur={this.checkValidation}
							/>
							{errors.has('contactMsg') && (
								<span className="help is-danger">{this.props.textKeys.errors_msgrequired}</span>
							)}
						</div>
					</div>
					<div className="field is-grouped">
						<div className="control">
							<button className="button is-link">{this.props.textKeys.btn_submit}</button>
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
		const { errors } = this.validator;

		// reset errors for url field
		errors.remove(name);

		this.setState({
			[name]: value
		} as Pick<IContactForm, keyof IContactForm>);
	};

	private checkValidation = (event: any): void => {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		const { errors } = this.validator;
		this.validator.validate(name, value).then(() => {
			console.log('ERRORS', errors, errors.items, errors.items.length);
			this.setState({ errors });
		});
	};

	private submit(formData: IContactFields) {
		// const formId:HTMLElement = document.getElementById('contact-dg-form');
		// formId && formId.submit();
		console.log('SUBMITTING FORM', formData, JSON.stringify(formData));
		const proxyurl = 'https://cors-anywhere.herokuapp.com/';
		fetch(proxyurl + 'https://usebasin.com/f/60d54aefd589', {
			body: JSON.stringify(formData),
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			method: 'POST'
		}).then(response => {
			// response.json()
			// .then(data => {
			console.log('Successful' + response);
			// });
		});
	}
	private resetForm = (e: any): void => {
		e.preventDefault();
		this.setState({
			contactEmail: '',
			contactMsg: '',
			contactName: ''
		});
	};
	private validateBeforeSubmit(e: any) {
		e.preventDefault();
		const formData: IContactFields = {
			contactEmail: this.state.contactEmail,
			contactMsg: this.state.contactMsg,
			contactName: this.state.contactName
		};
		const { errors } = this.validator;

		this.validator.validateAll(formData).then((success: any) => {
			if (success) {
				this.setState({ formSubmitted: true });
				this.submit(formData);
				return true;
			} else {
				this.setState({ errors: errors });
				return false;
			}
		});
		console.log('VALIDATING FORM');
	}

	// public onChange(e) {
	// 	const name = e.target.name
	// 	const value = e.target.value
	// 	const { errors } = this.validator

	// 	// reset errors for url field
	// 	errors.remove(name)

	// 	// update form data
	// 	this.setState({ formData: { ...this.state.formData, [name]: value } })

	// 	this.validator.validate(name, value)
	// 	  .then(() => {
	// 		this.setState({ errors })
	// 	  })
	//   }

	//   public submit(formData) {
	// 	console.log(formData)
	//   }

	//   public validateAndSubmit(e) {
	// 	e.preventDefault()

	// 	const { formData } = this.state
	// 	const { errors } = this.validator

	// 	this.validator.validateAll(formData)
	// 	  .then(success => {
	// 		if (success) {
	// 		  this.submit(formData)
	// 		} else {
	// 		  this.setState({ errors })
	// 		}
	// 	  })

	//   }
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
