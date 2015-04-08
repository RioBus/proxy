import {LogBusiness} from './log';
import {SearchBusiness} from './search';
import {ServerBusiness} from './server';
import {ItineraryBusiness} from './itinerary';
import {ReportBusiness} from './report';

/**
 * BusinessFactory provides decoupling to the business logic layer.
 * You may use it to avoid direct dependency to the Business layer classes.
 * The Business layer is responsible for the application's business logic.
 *
 * @class BusinessFactory
 */
export class BusinessFactory{

    /**
     * Returns a LogBusiness instance
     * @returns {LogBusiness}
     */
    static getLogBusiness(){
        "use strict";
        return new LogBusiness();
    }

    /**
     * Returns a SearchBusiness instance
     * @returns {SearchBusiness}
     */
    static getSearchBusiness(){
        "use strict";
        return new SearchBusiness();
    }

    /**
     * Returns a ServerBusiness instance
     * @returns {ServerBusiness}
     */
    static getServerBusiness(){
        "use strict";
        return new ServerBusiness();
    }

    /**
     * Returns a ItineraryBusiness instance
     * @returns {ItineraryBusiness}
     */
    static getItineraryBusiness(){
        "use strict";
        return new ItineraryBusiness();
    }

    /**
     * Returns a ReportBusiness instance
     * @returns {ReportBusiness}
     */
    static getReportBusiness(){
        "use strict";
        return new ReportBusiness();
    }

}