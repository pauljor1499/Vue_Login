import Vue from "vue";
import VueRouter from "vue-router";

import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
import ForgotPassword from "../views/ForgotPassword.vue";
import LandingPage from "../views/LandingPage.vue";
import NotFoundComponent from "../views/NotFoundComponent.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		redirect: "/signin",
	},
	{
		path: "/signin",
		name: "SignIn",
		component: SignIn,
	},
	{
		path: "/forgotpassword",
		component: ForgotPassword,
	},

	{
		path: "/registration",
		name: "SignUp",
		component: SignUp,
	},
	{
		path: "/landingpage",
		name: "Landing",
		component: LandingPage,
	},
	{ path: "*", component: NotFoundComponent },
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
