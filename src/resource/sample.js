import {Resource} from './resource';
import {ServiceFactory} from '../service/factory';

/**
 * Makes mocked data accessible
 * @class AllDataResource
 */
export class SampleResource extends Resource{

    /**
     * Request URL
     * @returns {string}
     */
    route(){
        "use strict";
        return '/sample';
    }

    /**
     * GET method handler
     *
     * @param request
     * @param response
     * @param next
     */
    get(request, response, next){
        "use strict";
        let result = ServiceFactory.getSearchService().getSampleData();
        response.jsonp(result);
    }

}