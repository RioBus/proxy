import {Resource} from './resource';
import {ServiceFactory} from '../service/factory';

/**
 * All bus lines request handler
 * @class AllDataResource
 */
export class AllDataResource extends Resource{

    /**
     * Request URL
     * @returns {string}
     */
    route(){
        "use strict";
        return '/search';
    }

    /**
     * GET method handler
     *
     * @param request
     * @param response
     * @param next
     */
    get(request, response, next) {
        let result = ServiceFactory.getSearchService().getAllData();
        response.jsonp(result);
    }
}