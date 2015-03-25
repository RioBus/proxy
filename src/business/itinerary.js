import {DataAccessFactory} from '../dataaccess/factory';

/**
 * Itinerary Business logics
 *
 * @class ItineraryBusiness
 */
export class ItineraryBusiness{

    /**
     * Returns the Itinerary, given a line
     * @param {String} line
     * @returns {*}
     */
    getItinerary(line){
        let dataAccess = DataAccessFactory.getItineraryDataAccess();
        return dataAccess.getItinerary(line);
    }
}