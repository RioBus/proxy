'use strict';
/* global database; */

class RegisterDAO {
	
	constructor(connection) {
		if(!connection) connection = database;
		this.collection = connection.collection('register', { indexes: [{ fields: { line: 1, description: 1 } }] });
	}
	
	getByName(name){
		return this.collection.find({name:name});
	}

	getByEmail(email){
		return this.collection.find({email:email});
	}

	getByToken(token){
		return this.collection.find({token:token});
	}

	getHeaders() {
		return this.collection.find({}, { fields: ['id','name','email','token'] });
	}
	
}
module.exports = RegisterDAO;