<template>
	<div class="signInPage">
		<v-row align="center" justify="center">
			<v-col lg="4" sm="6" cols="11" xl="3">
				<div class="imgCon">
					<img src="../assets/logo.png" alt="" class="logo" />
				</div>

				<v-card class="signIn" min-height="500px" max-width="500px">
					<div class="con">
						<v-form v-model="valid" ref="form" lazy-validation>
							<h1>Sign In</h1>
							<br />
							<v-text-field
								outlined
								placeholder="Email"
								prepend-inner-icon="mdi-email"
								v-model="email"
								:rules="emailRules"
								counter="50"
								maxlength="50"
							></v-text-field>
							<v-text-field
								outlined
								placeholder="Password"
								prepend-inner-icon="mdi-shield-lock"
								:type="show1 ? 'text' : 'password'"
								:append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
								@click:append="show1 = !show1"
								v-model="password"
								:rules="passwordRules"
							></v-text-field>
							<v-btn x-small text to="/forgotpassword">Forgot Password?</v-btn>
							<br />
							<br />
							<v-btn @click="signIn">Sign In</v-btn>
						</v-form>

						<br />
						<p>New to the app? Join us.</p>
						<v-btn to="/registration">Sign Up</v-btn>
						<br />
					</div>
				</v-card>

				<br />
				<br />
				<br />
			</v-col>
		</v-row>
		<v-dialog hide-overlay persistent width="300" v-model="signInDialog">
			<v-card color="white" light>
				<v-card-text>
					<br />
					<h3 class="dialogText">Signing in. Please wait.</h3>
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
	export default {
		data() {
			return {
				valid: true,
				show1: false,
				email: "",
				password: "",
				acceptedCredential: {
					email: "user123@gmail.com",
					password: "Testing1!!",
				},
				emailRules: [
					(v) => !!v || "E-mail is required",
					(v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
					(v) => v.length <= 50 || "Max 50 characters",
				],
				passwordRules: [(v) => !!v || "Password is required"],

				signInDialog: false,
				snackbar: false,
				timeout: 5000,
				errormessage: "",
			};
		},

		methods: {
			async signIn() {
				if (this.$refs.form.validate()) {
					try {
						this.signInDialog = true;
						const user = {
							email: this.email,
							password: this.password,
						};
						// const response = await userAPI.prototype.signInUser(user);
						if (
							this.acceptedCredential.email == user.email &&
							this.acceptedCredential.password == user.password
						) {
							setTimeout(() => {
								this.signInDialog = false;
								this.$router.push("/landingpage");
							}, 1000);
						} else {
							throw new Error("");
						}

						// localStorage.setItem("token", response.data.user.token);
					} catch (error) {
						this.signInDialog = false;
						this.snackbar = true;
						if (error.message == "Network Error") {
							this.errormessage = error.message;
						} else {
							this.errormessage = "Email or Password is incorrect";
						}
					}
				}
			},
		},

		created() {
			if (localStorage.getItem("token")) {
				this.$router.push("/dashboard");
			}
		},
	};
</script>

<style scoped>
	.signIn {
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
</style>
