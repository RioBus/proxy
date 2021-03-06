'use strict';
class MainResource {

	get base() { return '/'; }

	constructor(router) {
		router.get('/', this.getMainRoute);
	}

	getMainRoute(request, response) {
		response.redirect('https://github.com/RioBus/proxy/wiki/REST-API');
	}
}
module.exports = MainResource;