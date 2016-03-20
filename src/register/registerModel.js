'use strict';
const md5 = require("crypto-js/md5");
/**
 * Describes a Register instance
 * @class {Register}
 */
class Register {
	
	constructor(name,email,password,profile_image,social) {
		this.name = name;
		this.email = email;
		this.password = md5(password).toString();
		this.profile_image = profile_image || "";
		this.social = social || {facebook_id : "", google_id: "", twitter_id: ""};
	}
}
module.exports = Register;