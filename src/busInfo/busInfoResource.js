'use strict';
const wrap = require('co-express');
const Core = require('../core');
const Database = Core.Database;
const BusInfo = require('./busInfoModel');
const BusInfoDAO = require('./busInfoDAO');

class BusInfoResource {

	get base() { return '/v4/bus/info'; }
	
	constructor(router) {
		router.get('/:order', wrap(this.getByOrder));
	}

	*getByOrder(request, response) {
		const dao = new BusInfoDAO();
		const data = yield dao.getByOrder(request.params.order);
		response.jsonp(data);	
	}
}
module.exports = BusInfoResource;