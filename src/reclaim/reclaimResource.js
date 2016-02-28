'use strict';
const wrap = require('co-express');
const Core = require('../core');
const Database = Core.Database;
const Reclaim = require('./reclaimModel');
const ReclaimDAO = require('./reclaimDAO');

class ReclaimResource {

	get base() { return '/'; }
	
	constructor(router) {
		router.post('/v4/reclaim', wrap(this.postReclaim));
	}

	*postReclaim(request, response) {
		const dao = new ReclaimDAO();
		let data;
		try {
			data = yield dao.save(request.body);
			response.status(200);
		}
		catch(err) {
			data = err.toString();
			response.status(500);
		}
		finally {
			response.jsonp(data);	
		}
	}
}
module.exports = ReclaimResource;