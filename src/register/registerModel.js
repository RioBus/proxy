'use strict';
/**
 * Describes a Register instance
 * @class {Register}
 */
class Register {
	
	constructor(id,name,email) {
		this.id = id;
		this.name = name;
		this.email = email;
		//this.token = a hash de alguns dos ids, a decidir

	}
}
module.exports = Register;