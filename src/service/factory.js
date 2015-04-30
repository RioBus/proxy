import {LogService} from './log';
import {SearchService} from './search';
import {ItineraryService} from './itinerary';
import {ReportService} from './report';

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
     * Gets a ItineraryService instance
     * @returns {ItineraryService}
     */
    static getItineraryService(){
        "use strict";
        return new ItineraryService();
    }

    /**
     * Gets a ReportService instance
     * @returns {ReportService}
     */
    static getReportService(){
        "use strict";
        return new ReportService();
    }
}