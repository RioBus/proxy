'use strict';
const wrap = require('co-express');
const Core = require('../core');
const Database = Core.Database;
const Register = require('./registerModel');
const RegisterDAO = require('./registerDAO');
const Security = require('../common/securityUtil');

class RegisterResource {

	get base() { return '/'; }
	
	constructor(router) {
		router.post('/signup',wrap(this.signUp));
	}

	*signUp(request,response){
		const dao = new RegisterDAO();
		var aux = {};
		try{
			if(!request.body)throw new Error("body is empty.");
			if(typeof(request.body.name)!=='string' || request.body.name.lenght == 0) throw new Error("name is invalid");
			if(typeof(request.body.email)!=='string' || request.body.email.lenght == 0) throw new Error("email is invalid");
			if(typeof(request.body.password)!=='string' || request.body.password.lenght == 0) throw new Error("password is invalid");
			if(request.body.profile_image !== undefined && request.body.profile_image !== "") aux.profile_image = request.body.profile_image;
			if(request.body.social !== undefined){
				if (request.body.social.facebook_id !== undefined) {aux.social.facebook_id = request.body.social.facebook_id;}
				if (request.body.social.google_id !== undefined) {aux.social.google_id = request.body.social.google_id;}
				if (request.body.social.twitter_id !== undefined) {aux.social.twitter_id = request.body.social.twitter_id;}
			}
			var user = new Register(request.body.name,request.body.email,request.body.password,aux.profile_image,aux.social);
			yield dao.save(user);
			let data = {
				auth_token: yield Security.generateToken(user.email),
				data:{
					name:user.name,
					email:user.email
				}
			};
			response.status(200).jsonp(data);
		}catch(e){
			response.status(400).jsonp(e);
		}		
	}
}
module.exports = RegisterResource;