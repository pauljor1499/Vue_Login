<template>
	<div class="signUpPage">
		<v-row align="center" justify="center">
			<v-col lg="10" sm="11" cols="11" xl="6">
				<div class="imgCon">
					<img src="../assets/logo.png" alt="" class="logo" />
				</div>

				<v-card class="signUp" min-height="600px" max-width="1200px">
					<div class="con">
						<h1>Registration</h1>
						<br />
						<br />
						<v-form v-model="valid" ref="form" lazy-validation>
							<v-row justify="center">
								<v-col cols="12" lg="5" sm="4">
									<v-text-field
										outlined
										placeholder="First Name"
										prepend-inner-icon="mdi-contacts"
										v-model="fname"
										:rules="fnameRules"
										counter="25"
										maxlength="25"
										dense
										label="First Name"
									></v-text-field>
								</v-col>

								<v-col cols="12" lg="2" sm="4">
									<v-text-field
										outlined
										placeholder="Middle Initial"
										prepend-inner-icon="mdi-contacts"
										v-model="mname"
										:rules="mnameRules"
										counter="1"
										maxlength="1"
										dense
										label="Middle Initial"
									></v-text-field>
								</v-col>

								<v-col cols="12" lg="5" sm="4">
									<v-text-field
										outlined
										placeholder="Last Name"
										prepend-inner-icon="mdi-contacts"
										v-model="lname"
										:rules="lnameRules"
										counter="25"
										maxlength="25"
										label="Last Name"
										dense
									></v-text-field>
								</v-col>

								<v-col cols="12" lg="2" sm="3">
									<v-text-field
										outlined
										placeholder="Age"
										prepend-inner-icon="mdi-calendar-account"
										v-model="age"
										:rules="ageRules"
										dense
										label="Age"
										counter="3"
										maxlength="3"
									></v-text-field>
								</v-col>

								<v-col cols="12" lg="5" sm="4">
									<v-text-field
										outlined
										placeholder="Organization"
										prepend-inner-icon="mdi-office-building"
										v-model="organization"
										:rules="orgRules"
										counter="100"
										maxlength="100"
										dense
										label="Organization"
									></v-text-field>
								</v-col>

								<v-col cols="12" lg="5" sm="5">
									<vue-tel-input-vuetify
										outlined
										placeholder="Phone Number"
										prepend-inner-icon="mdi-card-account-phone-outline"
										v-model="myPhone"
										:rules="myPhone ? phoneRules : noRules"
										counter="10"
										dense
										label="Phone Number"
										:preferred-countries="['id', 'gb', 'ua', 'us']"
										:valid-characters-only="true"
										select-label="Country"
										@input="onInput"
										maxLen="13"
										mode="international"
									></vue-tel-input-vuetify>
								</v-col>

								<v-col cols="12" lg="4" sm="4">
									<v-text-field
										outlined
										placeholder="Email"
										prepend-inner-icon="mdi-email"
										v-model="email"
										:rules="emailRules"
										counter="50"
										maxlength="50"
										dense
										label="Email"
									></v-text-field>
								</v-col>

								<v-col cols="12" lg="4" sm="4">
									<v-text-field
										outlined
										placeholder="Password"
										prepend-inner-icon="mdi-shield-lock"
										:type="show1 ? 'text' : 'password'"
										:append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
										@click:append="show1 = !show1"
										v-model="password"
										:rules="passwordRules"
										dense
										label="Password"
										counter="25"
										maxlength="25"
									></v-text-field>

									<div class="rules">
										<div class="passRules">
											<v-icon slot="append" color="success" v-if="rule1">
												mdi-check
											</v-icon>
											<v-icon slot="append" color="error" v-if="!rule1">
												mdi-window-close
											</v-icon>
											<p>Password must have atleast one lowercase letter</p>
										</div>
										<div class="passRules">
											<v-icon slot="append" color="success" v-if="rule2">
												mdi-check
											</v-icon>
											<v-icon slot="append" color="error" v-if="!rule2">
												mdi-window-close
											</v-icon>
											<p>Password must have atleast one uppercase letter</p>
										</div>

										<div class="passRules">
											<v-icon slot="append" color="success" v-if="rule5">
												mdi-check
											</v-icon>
											<v-icon slot="append" color="error" v-if="!rule5">
												mdi-window-close
											</v-icon>
											<p>Min 8 characters</p>
										</div>

										<div class="passRules">
											<v-icon slot="append" color="success" v-if="rule3">
												mdi-check
											</v-icon>
											<v-icon slot="append" color="error" v-if="!rule3">
												mdi-window-close
											</v-icon>
											<p>Password must have atleast one number</p>
										</div>

										<div class="passRules">
											<v-icon slot="append" color="success" v-if="rule4">
												mdi-check
											</v-icon>
											<v-icon slot="append" color="error" v-if="!rule4">
												mdi-window-close
											</v-icon>
											<p>Password must have atleast one character</p>
										</div>
									</div>
								</v-col>

								<v-col cols="12" lg="4" sm="4">
									<v-text-field
										outlined
										dense
										placeholder="Repeat Password"
										prepend-inner-icon="mdi-shield-lock"
										:type="show2 ? 'text' : 'password'"
										:append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
										@click:append="show2 = !show2"
										v-model="rpassword"
										label="Repeat Password"
										counter="25"
										maxlength="25"
										:rules="
											this.rpassword != this.password
												? passMatch
												: passwordRules
										"
									></v-text-field>
								</v-col>
							</v-row>
						</v-form>
						<br />
						<v-btn xl @click="signUp">Create My Account</v-btn>
						<v-row justify="center">
							<v-col lg="8" sm="10" cols="12">
								<div class="terms">
									<p>
										By clicking "Create My Account" you agree to our terms and
										conditions.
									</p>
									<p>
										Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										Modi quae, in impedit similique atque itaque excepturi sed
										et ducimus nobis? Lorem ipsum, dolor sit amet consectetur
										adipisicing elit. Corporis similique, sunt totam fugit quis
										cum ex illo incidunt quibusdam neque.
									</p>
								</div>
							</v-col>
						</v-row>

						<br />
						<p>Already have an account?</p>

						<v-btn xl to="/signin">Sign In Instead</v-btn>
					</div>
				</v-card>
				<br />
				<br
			/></v-col>
		</v-row>

		<v-dialog hide-overlay persistent width="300" v-model="signUpDialog">
			<v-card color="white" light>
				<v-card-text>
					<br />
					<h3 class="dialogText">Creating account. Please wait.</h3>
					<v-progress-linear
						indeterminate
						color="black"
						class="mb-0 mt-5"
					></v-progress-linear>
				</v-card-text>
			</v-card>
		</v-dialog>

		<div class="text-center">
			<v-snackbar v-model="snackbar" :timeout="timeout">
				{{ errormessage }}

				<template v-slot:action="{ attrs }">
					<v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
						Close
					</v-btn>
				</template>
			</v-snackbar>
		</div>
	</div>
</template>

<script>
	// import userAPI from "../api/apis.js";
	import VueTelInputVuetify from "vue-tel-input-vuetify/lib/vue-tel-input-vuetify.vue";

	export default {
		components: {
			VueTelInputVuetify,
		},
		data() {
			return {
				valid: true,
				show1: false,
				fname: "",
				mname: "",
				lname: "",
				myPhone: "",
				phone: {
					number: "",
					valid: false,
					country: undefined,
				},
				email: "",
				password: "",
				rpassword: "",
				organization: "",
				age: null,
				show1: false,
				show2: false,
				noRules: [],
				fnameRules: [
					(v) => !!v || "First name is required",
					(v) => v.length <= 25 || "Max 25 characters",
				],
				mnameRules: [(v) => v.length <= 25 || "Max 25 characters"],
				lnameRules: [
					(v) => !!v || "Last name is required",
					(v) => v.length <= 25 || "Max 25 characters",
				],
				orgRules: [(v) => v.length <= 25 || "Max 25 characters"],
				ageRules: [
					(v) => !!v || "Age is required",
					(v) =>
						(v > 17 && v < 105) ||
						"Age must be greater than 17 but less than 105",
				],
				phoneRules: [(v) => this.phone.valid || "Phone must be valid"],
				emailRules: [
					(v) => !!v || "E-mail is required",
					(v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
					(v) => v.length <= 50 || "Max 50 characters",
				],
				passwordRules: [(v) => this.passRules() || ""],
				passMatch: [() => `The password you entered don't match`],

				signUpDialog: false,
				snackbar: false,
				timeout: 2000,
				errormessage: "",
			};
		},
		methods: {
			passRules() {
				return this.rule1 &
					this.rule2 &
					this.rule3 &
					this.rule4 &
					(this.rule5 == 1)
					? true
					: false;
			},
			onInput(formattedNumber, { number, valid, country }) {
				this.phone.number = number.international;
				this.phone.valid = valid;
				this.phone.country = country && country.name;
			},

			async signUp() {
				// try {
				// 	const response = await userAPI.prototype.fetchAll();

				// 	if (response) {
				// 		console.log(response);
				// 	}
				// } catch (error) {
				// 	console.log(error);
				// }

				if (this.$refs.form.validate()) {
					try {
						this.signUpDialog = true;
						const user = {
							first_name: this.fname,
							middle_intial: this.mname,
							last_name: this.lname,
							age: this.age,
							email: this.email,
							phone_number: this.phone,
							password1: this.password,
							password2: this.rpassword,
						};

						// const response = await userAPI.prototype.createUser(user);
						// const response = await userAPI.prototype.fetchAll();

						// if (response) {
						// 	console.log(response);
						// }
						setTimeout(() => {
							this.signUpDialog = false;
							this.$router.push("/landingpage");
						}, 1000);

						// localStorage.setItem("token", response.data.user.token);
					} catch (error) {
						this.signUpDialog = false;
						this.snackbar = true;
						if (error.message == "Network Error") {
							this.errormessage = error.message;
						} else {
							this.errormessage = "An error occured.";
						}

						console.log(error);
					}
				}
			},
		},

		computed: {
			rule1: function () {
				return /^(?=.*?[a-z])/.test(this.password);
			},
			rule2: function () {
				return /^(?=.*?[A-Z])/.test(this.password);
			},
			rule3: function () {
				return /^(?=.*?[0-9])/.test(this.password);
			},
			rule4: function () {
				return /^(?=.*?[#?!@$%^&*-])/.test(this.password);
			},
			rule5: function () {
				return this.password.length > 7;
			},
		},
	};
</script>

<style scoped>
	.signUp {
		padding: 20px;
		margin: auto;
	}

	.con {
		padding: 40px;
		text-align: center;
	}

	.imgCon {
		text-align: center;
	}

	.logo {
		width: 80px;
		margin: 40px auto;
	}

	.terms {
		text-align: justify;
		padding: 10px;
		margin: 20px;
		border-radius: 5px;
		background-color: rgb(255, 255, 255);
		box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
			0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
	}

	.terms p {
		font-size: 12px;
		padding: 5px;
		margin: 0px;
	}

	.rules {
		padding: 5px 12px;
		margin-top: -15px;
	}

	.passRules {
		font-size: 10px;
		margin-top: -5px;
		padding: 3px;
		text-align: start;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.passRules p {
		margin: 0px;
		padding: 0px;
	}

	.r1 {
		color: green;
	}
</style>
ss
