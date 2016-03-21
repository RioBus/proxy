'use strict';
const jwt = require('json-web-token');
const Promise = require("bluebird");
Promise.promisifyAll(jwt);
const PRIVATE_KEY = '131455464';
class SecurityUtil{
	static decodeToken(token){
		return jwt.decode(PRIVATE_KEY,token);
	}

	static generateToken(payload){
		return jwt.encode(PRIVATE_KEY,payload);
	}
}

module.exports = SecurityUtil;