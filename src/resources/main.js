'use strict';
var Resource = require('./resource');
var Factory = require('../common/factory');

/**
 * Main request handler
 * @class MainResource
 */
class MainResource extends Resource{

    /**
     * Request URL
     * @returns {string}
     */
    route(){
        return '/';
    }

    /**
     * GET method handler
     *
     * @param request
     * @param response
     * @param next
     */
    get(request, response, next){
        let strings = Factory.getStrings();
        response.jsonp({greet: strings.greeting});
    }
}
module.exports = MainResource;