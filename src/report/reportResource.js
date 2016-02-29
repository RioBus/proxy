'use strict';
const wrap = require('co-express');
const Core = require('../core');
const Database = Core.Database;
const Report = require('./reportModel');
const ReportDAO = require('./reportDAO');

class ReportResource {

	get base() { return '/'; }
	
	constructor(router) {
		router.post('/v4/report', wrap(this.postReport));
	}

	*postReport(request, response) {
		const dao = new ReportDAO();
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
module.exports = ReportResource;