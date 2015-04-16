import {Resource} from './resource';
import {Factory} from '../common/factory';
import {ServiceFactory} from '../service/factory';

/**
 * Bus search request handler
 * @class SearchResource
 */
export class SearchResource extends Resource{

    /**
     * Request URL
     * @returns {string}
     */
    route(){
        "use strict";
        return '/search/:platformId/:lines';
    }

    /**
     * GET method handler
     *
     * @param request
     * @param response
     * @param next
     */
    get(request, response, next){
        let service = ServiceFactory.getSearchService();
        let params = request.params;
        let result = service.parseQueryData(params.lines, params.platformId);
        response.jsonp(result);
    }
}
