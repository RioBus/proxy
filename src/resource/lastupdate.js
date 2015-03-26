import {ServiceFactory} from '../service/factory';

/**
 * Last Data Update request handler
 * @class LastUpdateResource
 */
export class LastUpdate{

    /**
     * Request URL
     * @returns {string}
     */
    route(){
        "use strict";
        return '/lastupdate';
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
        let service = ServiceFactory.getSearchService();
        response.set('Content-Type', 'text/plain');
        response.send(service.getLastUpdateTime());
    }
}