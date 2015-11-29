'use strict';
const wrap = require('co-express');
const Core = require('../core');
const Database = Core.Database;
const Bus = require('./busModel');
const BusDAO = require('./busDAO');

class BusResource {

	get base() { return '/v3/search'; }
	
	constructor(router) {
		router.get('/:lines', wrap(this.getByLines));
	}

	*getByLines(request, response) {
		const dao = new BusDAO();
		const data = yield dao.getByLines(request.params.lines.split(','));
		response.jsonp(data);	
	}
}
module.exports = BusResource;