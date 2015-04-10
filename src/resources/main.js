import {Resource} from './resource';
import {Factory} from '../common/factory';

/**
 * Main request handler
 * @class MainResource
 */
export class MainResource extends Resource{

    /**
     * Request URL
     * @returns {string}
     */
    route(){
        "use strict";
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
