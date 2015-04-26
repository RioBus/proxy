import {Resource} from './resource';
import {ServiceFactory} from '../service/factory';

/**
 * DataProvider log request handler
 * @class DataProviderLogResource
 */
export class DataProviderLogResource extends Resource{

    /**
     * Request URL
     * @returns {string}
     */
    route(){
        "use strict";
        return '/log/dataprovider/:size';
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
        response.send(service.getDataProviderLog(request.params.size));
    }
}