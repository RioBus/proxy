import {Resource} from './resource';
import {ServiceFactory} from '../service/factory';

/**
 * Reports request handler
 * @class ReportsResource
 */
export class ReportsResource extends Resource{

    /**
     * Request URL
     * @returns {string}
     */
    route(){
        "use strict";
        return '/reports';
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