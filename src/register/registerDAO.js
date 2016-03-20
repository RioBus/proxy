'use strict';
/* global database; */

class RegisterDAO {
	
	constructor(connection) {
		if(!connection) connection = database;
		this.collection = connection.collection('users');
	}

	save(user){
		return this.collection.insert(user);
	}
	
}
module.exports = RegisterDAO;