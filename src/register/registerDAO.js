'use strict';
/* global database; */
const md5 = require("crypto-js/md5");

class RegisterDAO {
	
	constructor(connection) {
		if(!connection) connection = database;
		this.collection = connection.collection('users');
	}

	save(user){
		return this.collection.insert(user);
	}

	getUser(user){
		return this.collection.findOne({email:user.email, password:md5(user.password).toString()});
	}
	
	getUserByEmail(email){
		return this.collection.findOne({email: email});
	}
	
}
module.exports = RegisterDAO;