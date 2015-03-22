import {DataAccessFactory} from '../dataaccess/factory';

export class ItineraryBusiness{

    getItinerary(line){
        let dataAccess = DataAccessFactory.getItineraryDataAccess();
        return dataAccess.getItinerary(line);
    }
}