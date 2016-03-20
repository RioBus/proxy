'use strict';
const wrap = require('co-express');
const Core = require('../core');
const Database = Core.Database;
const Register = require('./registerModel');
const RegisterDAO = require('./registerDAO');

class RegisterResource {

	get base() { return '/'; }
	
	constructor(router) {
		router.get('/v4/register', wrap(this.getAllUsers));
		router.get('/v4/itinerary/:name', wrap(this.getByName));
		router.get('/v4/itinerary/:email', wrap(this.getByEmail));
		router.get('/v4/itinerary/:token', wrap(this.getByToken));
	}

	*getAllUsers(request, response) {
		const dao = new registerDAO();
		const data = yield dao.getHeaders();
        for(let i=0;i<data.length; i++) delete data[i]._id;
		response.jsonp(data);	
	}

	*getByName(request, response) {
		const dao = new registerDAO();
		const data = yield dao.getByName(request.params.name);
        delete data._id;
		response.jsonp(data);	
	}

	*getByEmail(request, response) {
		const dao = new registerDAO();
		const data = yield dao.getByEmail(request.params.email);
        delete data._id;
		response.jsonp(data);	
	}

	*getByToken(request,response){
		const dao = new registerDAO();
		const data = yield dao.getByToken(request.params.token);
        delete data._id;
		response.jsonp(data);	
	}
}
module.exports = RegisterResource;