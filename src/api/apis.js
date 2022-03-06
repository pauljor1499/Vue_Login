import axios from "axios";
const url = "https://virtualwebinarplatform.herokuapp.com";
axios.defaults.headers.common["auth-token"] =
	"Bearer " + localStorage.getItem("token");

// axios.defaults.headers.common["Content-Type"] = "application/json";

// axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

export default class API {
	// async getSpecificUser() {
	// 	axios.defaults.headers.common["auth-token"] =
	// 		"Bearer " + localStorage.getItem("token");
	// 	const user = await axios.get(url + "/getDetails");
	// 	return user;
	// }

	async fetchAll() {
		const users = await axios.get(url + "/registration/fetch/all");
		return users;
	}

	async createUser(newUser) {
		const user = await axios.post(url + "/registration", newUser);
		return user;
	}

	// async updateUser(updatedUser) {
	// 	const user = await axios.patch(url + "/update", updatedUser);
	// 	return user;
	// }
}
