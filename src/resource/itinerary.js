import {ServiceFactory} from '../service/factory';
import {Resource} from './resource';

export class ItineraryResource extends Resource{

    route(){
        return '/itinerary/:line';
    }

    get(request, response, next){
        let service = ServiceFactory.getItineraryService();
        let result = service.getItinerary(request);
        response.json(result);
    }
}