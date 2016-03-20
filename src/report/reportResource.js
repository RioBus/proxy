'use strict';
const wrap = require('co-express');
const Core = require('../core');
const Database = Core.Database;
const Report = require('./reportModel');
const ReportDAO = require('./reportDAO');
const SecurityUtil = require('../common/securityUtil');
const RegisterDAO = require('../register/registerDAO');

class ReportResource {

	get base() { return '/'; }
	
	constructor(router) {
		router.post('/v4/report', wrap(this.postReport));
		router.get('/v4/report/:order', wrap(this.getActiveReports));
	}
    
    static checkConsistency(data) {
        if(!data) throw new Error("No data set.");
        if(!data.title || data.title==='') throw new Error("Title not set.");
        if(!data.order || data.order==='') throw new Error("Order not set.");
        if(!data.line || data.line==='') throw new Error("Line not set.");
        if(!data.message || data.message==='') throw new Error("Message not set.");
    }
	
	static *checkAuth(request, response, next){
		let token = request.headers['authorization'];
		if(!token) return false;
		else{
			let data = yield SecurityUtil.decodeToken(token);
			let dao = new RegisterDAO();
			let user = yield dao.getUserByEmail(data.value);
			if(!user) return false;
			else return true;
		}
		
	}

	*postReport(request, response) {
		let canAccess = yield ReportResource.checkAuth(request, response);
		if(!canAccess){
			response.status(403).send('You not allowed here.');
			return;
		}
		const dao = new ReportDAO();
		let data;
		try {
            ReportResource.checkConsistency(request.body);
			data = yield dao.save(new Report(request.body.line, request.body.order, request.body.title, request.body.message));
			response.status(200);
		} catch(error) {
			data = error;
			response.status(500);
		} finally {
			response.jsonp(data);	
		}
	}
    
    *getActiveReports(request, response) {
		let canAccess = yield ReportResource.checkAuth(request, response);
		if(!canAccess){
			response.status(403).send('You not allowed here.');
			return;
		}
        const dao = new ReportDAO();
        let data;
		try {
            let order = request.params.order.toString();
			data = yield dao.getActiveByOrder(order);
			response.status(200);
		} catch(error) {
			data = error;
			response.status(500);
		} finally {
			response.jsonp(data);	
		}
    }
}
module.exports = ReportResource;