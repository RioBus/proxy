'use strict';
const wrap = require('co-express');
const Core = require('../core');
const Database = Core.Database;
const Bus = require('./busModel');
const BusDAO = require('./busDAO');

class BusResource {

	get base() { return '/v3/search'; }
	
	constructor(router) {
		router.get('/:data', wrap(this.getBuses));
	}

	*getBuses(request, response) {
		const dao = new BusDAO();
		let data = yield dao.getByLines(request.params.data.split(','));
		if(data.length>0) response.jsonp(data);
		else {
			data = yield dao.getByOrders(request.params.data.split(','));
			response.jsonp(data);
		}	
	}
}
module.exports = BusResource;