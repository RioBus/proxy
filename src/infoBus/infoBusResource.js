'use strict';
const wrap = require('co-express');
const Core = require('../core');
const Database = Core.Database;
const InfoBus = require('./infoBusModel');
const InfoBusDAO = require('./infoBusDAO');

class InfoBusResource {

	get base() { return '/v4/search'; }
	
	constructor(router) {
		router.get('/:order', wrap(this.getByOrder));
	}

	*getByOrder(request, response) {
		const dao = new InfoBusDAO();
		const data = yield dao.getByOrder(request.params.order);
		response.jsonp(data);	
	}
}
module.exports = InfoBusResource;