import {Resource} from './resource';
import {ServiceFactory} from '../service/factory';

/**
 * Server log request handler
 * @class ServerLogResource
 */
export class ServerLogResource extends Resource{

    /**
     * Request URL
     * @returns {string}
     */
    route(){
        "use strict";
        return '/log/server';
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
        response.send(service.getServerLog());
    }
}