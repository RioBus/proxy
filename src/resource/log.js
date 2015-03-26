import {Resource} from './resource';
import {ServiceFactory} from '../service/factory';

/**
 * Runtime Log request handler
 * @class AllDataResource
 */
export class LogResource extends Resource{

    /**
     * Request URL
     * @returns {string}
     */
    route(){
        "use strict";
        return '/log';
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
        let service = ServiceFactory.getLogService();
        response.set('Content-Type', 'text/plain');
        response.send(service.getRuntimeLog());
    }

}