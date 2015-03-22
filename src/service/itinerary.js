import {BusinessFactory} from '../business/factory';

export class ItineraryService{

    getItinerary(request){
        let business = BusinessFactory.getItineraryBusiness();
        return business.getItinerary(request.params.line);
    }
}