import {BusinessFactory} from '../business/factory';

/**
 * Provides an interface to the Itinerary business logic
 * @class ItineraryService
 */
export class ItineraryService{

    /**
     * Access business logic to search for the given itinerary
     * @param {*} request
     * @returns {*}
     */
    getItinerary(line){
        let business = BusinessFactory.getItineraryBusiness();
        return business.getItinerary(line);
    }
}