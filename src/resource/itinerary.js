import {ServiceFactory} from '../service/factory';
import {Resource} from './resource';

/**
 * Itinerary request handler
 * @class ItineraryResource
 */
export class ItineraryResource extends Resource{

    /**
     * Request URL
     * @returns {string}
     */
    route(){
        return '/itinerary/:line';
    }

    /**
     * GET method handler
     *
     * @param request
     * @param response
     * @param next
     */
    get(request, response, next){
        let service = ServiceFactory.getItineraryService();
        let result = service.getItinerary(request);
        response.jsonp(result);
    }
}