import * as React from 'react';
import { getData } from 'utilities';

export interface IContactContainerProps extends ILoadedState {
	temp?: string;
}
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
export class ContactContainer extends React.Component<IContactContainerProps, any> {
	constructor(props: any) {
		super(props);
		this.state = {};
	}
	public componentDidMount() {
		getData(getApplications, null, 'contactData')
			.then(({ ...postData }) => {
				console.log('postData', postData);
				this.setState({ applications: postData.applications, loading: false });
			})
			// TODO: better error handling. Right now, there is no useful error message. So we return a generic textkeys.
			.catch((error: any) => {
				console.log('error');
				this.setState({ loading: false, notification: textKeys.genericError });
			});
	}
	public render() {
		return (
			<div>
				CONTACT PAGE
				{/* <div className='container' id='contact-form' itemScope={true} itemType='http://schema.org/ContactPage'>
		<form id='contact-dg-form' accept-charset='UTF-8' action='https://usebasin.com/f/60d54aefd589' enctype='multipart/form-data' method='POST' @submit='validateBeforeSubmit' className='{'submitted':formSubmitted, 'thankyou':!formSubmitted }'>
			<div className='field'>
				<label className='label'>Name<span className='required'></span></label>
				<div className='control'>
					<input className='input' v-model='contactName' v-validate=''required'' className='{'is-danger': errors.has('contactName') }' type='text' id='contactName' name='contactName' required placeholder='What do people call you?'>
					<span v-show='errors.has('contactName')' className='help is-danger'>{{ errors.first('contactName') }}</span>
				</div>
			</div>
			<div className='field'>
				<label className='label'>Email Address<span className='required'></span></label>
				<div className='control has-icons-left has-icons-right'>
					<input className='input' name='contactEmail' id='contactEmail' v-model='contactEmail' v-validate=''required|email'' className='{'is-danger': errors.has('contactEmail') }' type='email' required placeholder='Where do you get email?'>
					<span className='icon is-small is-left'>
					<i className='fas fa-envelope'></i>
					</span>
					<span v-show='errors.has('contactEmail')' className='help is-danger'>{{ errors.first('contactEmail') }}</span>
				</div>
			</div>

			<div className='field'>
				<label className='label'>Message<span className='required'></span></label>
				<div className='control'>
					<textarea className='textarea' name='contactMsg' id='contactMsg' v-model='contactMsg' v-validate=''required'' className='{'is-danger': errors.has('contactMsg') }' required placeholder='What do you want me to know?'></textarea>
					<span v-show='errors.has('contactMsg')' className='help is-danger'>{{ errors.first('contactMsg') }}</span>
				</div>
			</div>
			<div className='field is-grouped'>
				<div className='control'>
					<button className='button is-link' :disabled='!isComplete'>Submit</button>
				</div>
				<div className='control'>
					<button className='button is-text'>Cancel</button>
				</div>
			</div>
		</form>
		<div className='{'thankyou':formSubmitted, 'submitted':!formSubmitted }'>
			<h2>Thank you, I'll be in touch... maybe...</h2>
		</div>
	</div> */}
			</div>
		);
	}
}
