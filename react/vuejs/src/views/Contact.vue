<template>
	<div class='container' id='contact-form' itemscope itemtype='http://schema.org/ContactPage'>
		<div class='contact-buzzoff'>Please <strong>don't contact me</strong> to sell or 'help me' with anything. I don't need your company to do my work, design my logos, be my 'partner,' or be my 'support team'. I also don't have the need to hire anyone for my freelance projects nor am I the person to contact for hiring at IBM.
Thank you!</div>
		<form id='contact-dg-form' accept-charset='UTF-8' action='https://usebasin.com/f/60d54aefd589' enctype='multipart/form-data' method='POST' @submit='validateBeforeSubmit' :class='{"submitted":formSubmitted, "thankyou":!formSubmitted }'>
			<div class='field'>
				<label class='label'>Name<span class='required'></span></label>
				<div class='control'>
					<input class='input' v-model='contactName' v-validate='"required"' :class='{"is-danger": errors.has("contactName") }' type='text' id='contactName' name='contactName' required placeholder='What do people call you?'>
					<span v-show="errors.has('contactName')" class='help is-danger'>{{ errors.first('contactName') }}</span>
				</div>
			</div>
			<div class='field'>
				<label class='label'>Email Address<span class='required'></span></label>
				<div class='control has-icons-left has-icons-right'>
					<input class='input' name='contactEmail' id='contactEmail' v-model='contactEmail' v-validate='"required|email"' :class='{"is-danger": errors.has("contactEmail") }' type='email' required placeholder='Where do you get email?'>
					<span class='icon is-small is-left'>
					<i class='fas fa-envelope'></i>
					</span>
					<span v-show="errors.has('contactEmail')" class='help is-danger'>{{ errors.first('contactEmail') }}</span>
				</div>
			</div>

			<div class='field'>
				<label class='label'>Message<span class='required'></span></label>
				<div class='control'>
					<textarea class='textarea' name='contactMsg' id='contactMsg' v-model='contactMsg' v-validate='"required"' :class='{"is-danger": errors.has("contactMsg") }' required placeholder='What do you want me to know?'></textarea>
					<span v-show="errors.has('contactMsg')" class='help is-danger'>{{ errors.first('contactMsg') }}</span>
				</div>
			</div>
			<div class='field is-grouped'>
				<div class='control'>
					<button class='button is-link' :disabled='!isComplete'>Submit</button>
				</div>
				<div class='control'>
					<button class='button is-text'>Cancel</button>
				</div>
			</div>
		</form>
		<div :class='{"thankyou":formSubmitted, "submitted":!formSubmitted }'>
			<h2>Thank you, I'll be in touch... maybe...</h2>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Contact',
	props: [],
	data() {return {
		formSubmitted: false,
		contactMsg: '',
		contactEmail:'',
		contactName:''
	};},
	computed: {
		isComplete () {
			return this.contactMsg !== '' && this.contactEmail !== '' && this.contactName !== '';
		}
	},
	methods: {
		resetForm(){
			this.contactMsg	= '';
			this.contactEmail='';
			this.contactName='';
		},
		validateBeforeSubmit(e) {
			this.$validator.validateAll().then((result) => {
				if (result) {
					this.formSubmitted = true;
					return true;
				}else{
					e.preventDefault();
					return false;
				}
			});
		}
	},
	created() {}
};
</script>

<style></style>