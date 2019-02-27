import * as React from 'react';
import classnames from 'classnames';
import ReeValidate from 'ree-validate';
import { TEXT_KEYS } from 'data';

type IContactProps = IPageData;

export class Contact extends React.Component<IContactProps, IContactForm> {
	public validator: IValidator;
	private textKeys: ITextKeys = TEXT_KEYS;
	constructor(props: IContactProps) {
		super(props);
		this.validator = new ReeValidate({
			contactEmail: 'required|email',
			contactMsg: 'required|min:3',
			contactName: 'required|min:3',
		});
		this.state = {
			contactEmail: '',
			contactMsg: '',
			contactName: '',
			errors: this.validator.errors,
			formSubmitted: false,
		};

		this.checkValidation = this.checkValidation.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.validateBeforeSubmit = this.validateBeforeSubmit.bind(this);
	}

	public render(): React.ReactNode {
		const { errors }: IContactForm = this.state;

		return (
			<div className='container' id='contact-form' itemScope={true} itemType='http://schema.org/ContactPage'>
				<div
					id='contact-content'
					className='contact-buzzoff'
					dangerouslySetInnerHTML={{ __html: this.props.content.rendered }}
				/>
				<form
					id='contact-dg-form'
					onSubmit={this.validateBeforeSubmit}
					className={this.state.formSubmitted ? 'submitted' : 'thankyou'}
				>
					<div className='field'>
						<label className='label'>
							{this.textKeys.contact.name}
							<span className='required' />
						</label>
						<div className='control'>
							<input
								name='contactName'
								id='contactName'
								value={this.state.contactName}
								className={classnames('input', { 'is-danger': errors.has('contactName') })}
								type='text'
								required={true}
								placeholder={this.textKeys.contact.nameDefault}
								onChange={this.handleChange}
								onBlur={this.checkValidation}
								autoFocus={true}
							/>
							{errors.has('contactName') && (
								<span className='help is-danger'>{this.textKeys.errors.nameRequired}</span>
							)}
						</div>
					</div>
					<div className='field'>
						<label className='label'>
							{this.textKeys.contact.email}
							<span className='required' />
						</label>
						<div className='control has-icons-left has-icons-right'>
							<input
								name='contactEmail'
								id='contactEmail'
								value={this.state.contactEmail}
								className={classnames('input', { 'is-danger': errors.has('contactEmail') })}
								type='email'
								required={true}
								placeholder={this.textKeys.contact.emailDefault}
								onChange={this.handleChange}
								onBlur={this.checkValidation}
							/>
							<span className='icon is-small is-left'>
								<i className='fas fa-envelope' />
							</span>
							{errors.has('contactEmail') && (
								<span className='help is-danger'>{this.textKeys.errors.emailFormat}</span>
							)}
						</div>
					</div>
					<div className='field'>
						<label className='label'>
							{this.textKeys.contact.message}
							<span className='required' />
						</label>
						<div className='control'>
							<textarea
								name='contactMsg'
								id='contactMsg'
								value={this.state.contactMsg}
								className={classnames('textarea', { 'is-danger': errors.has('contactMsg') })}
								required={true}
								placeholder={this.textKeys.contact.messageDefault}
								onChange={this.handleChange}
								onBlur={this.checkValidation}
							/>
							{errors.has('contactMsg') && (
								<span className='help is-danger'>{this.textKeys.errors.msgRequired}</span>
							)}
						</div>
					</div>
					<div className='field is-grouped'>
						<div className='control'>
							<button className='button is-link'>{this.textKeys.buttons.submit}</button>
						</div>
						<div className='control'>
							<button className='button is-text' onClick={this.resetForm}>
								{this.textKeys.buttons.cancel}
							</button>
						</div>
					</div>
				</form>
				{this.state.formSubmitted && (
					<div className='thankyou'>
						<h2>{this.textKeys.contact.thankYou}</h2>
					</div>
				)}
			</div>
		);
	}
	private handleChange = (evt: IEvent): void => {
		const target: HTMLInputElement = evt.target;
		const value: string | boolean = target.type === 'checkbox' ? target.checked : target.value;
		const name: string = target.name;
		const { errors }: IContactForm = this.validator;

		// reset errors for url field
		errors.remove(name);

		this.setState({
			[name]: value,
		} as Pick<IContactForm, keyof IContactForm>);
	}

	private checkValidation = (evt: IEvent): void => {
		const target: HTMLInputElement = evt.target;
		const value: string | boolean = target.type === 'checkbox' ? target.checked : target.value;
		const name: string = target.name;
		const { errors }: IContactForm = this.validator;

		this.validator.validate(name, value).then(() => {
			console.log('ERRORS', errors, errors.items, errors.items.length);
			this.setState({ errors });
		});
	}

	private submit = (formData: IContactFields): void => {
		console.log('SUBMITTING FORM', formData, JSON.stringify(formData));
		const proxyurl: string = 'https://cors-anywhere.herokuapp.com/';

		fetch(proxyurl + 'https://usebasin.com/f/60d54aefd589', {
			body: JSON.stringify(formData),
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			method: 'POST',
		}).then((response: IPromiseResponse) => {
			console.log('Successful' + response);
		});
	}
	private resetForm = (e: IEvent): void => {
		e.preventDefault();
		this.setState({
			contactEmail: '',
			contactMsg: '',
			contactName: '',
		});
	}
	private validateBeforeSubmit = (evt: IEvent): void => {
		evt.preventDefault();
		const formData: IContactFields = {
			contactEmail: this.state.contactEmail,
			contactMsg: this.state.contactMsg,
			contactName: this.state.contactName,
		};
		const { errors }: IContactForm = this.validator;

		this.validator.validateAll(formData).then((success: IValidationSuccess) => {
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
}