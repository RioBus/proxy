import {LogService} from './log';
import {SearchService} from './search';
import {ServerService} from './server';
import {ItineraryService} from './itinerary';

/**
 * ServiceFactory provides decoupling to the service layer.
 * You may use it to avoid direct dependency to the Service layer classes.
 * The Service layer provides an interface between the application and the
 * business logic.
 *
 * @class ServiceFactory
 */
export class ServiceFactory{

    /**
     * Gets a LogService instance
     * @returns {LogService}
     */
    static getLogService(){
        "use strict";
        return new LogService();
    }

    /**
     * Gets a SearchService instance
     * @returns {SearchService}
     */
    static getSearchService(){
        "use strict";
        return new SearchService();
    }

    /**
     * Gets a ServerService instance
     * @returns {ServerService}
     */
    static getServerService(){
        "use strict";
        return new ServerService();
    }

    /**
     * Gets a ItineraryService instance
     * @returns {ItineraryService}
     */
    static getItineraryService(){
        "use strict";
        return new ItineraryService();
    }
}