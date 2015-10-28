'use strict';
class MainResource {

	get base() { return '/main'; }

	constructor(router) {
		router.get('/', this.getMainRoute);
	}

	getMainRoute(request, response, next) {
		response.jsonp({ type: 'success', message: 'hello world!' });
	}
}
module.exports = MainResource;