import {Resource} from './resource';
import {ServiceFactory} from '../service/factory';
import {Factory} from '../common/factory';

/**
 * Reports request handler
 * @class ReportsResource
 */
export class IntervalReportsResource extends Resource{

    /**
     * Request URL
     * @returns {string}
     */
    route(){
        "use strict";
        return '/reports/:minDate/:maxDate';
    }

    /**
     * GET method handler
     *
     * @param request
     * @param response
     * @param next
     */
    get(request, response, next) {
        let service = Factory.getReportService();
        let result = service.getByDate(request.params);
        response.jsonp(result);
    }
}