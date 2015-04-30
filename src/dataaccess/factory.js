import {BusDataAccess} from './bus';
import {LogDataAccess} from './log';
import {ItineraryDataAccess} from './itinerary';
import {ReportDataAccess} from './report';

/**
 * DataAccessFactory provides decoupling to the DataAccess layer.
 * You may use it to avoid direct dependency to the Data Access layer classes.
 * The DataAccess layer is responsible for all the operations over the stored data.
 */
export class DataAccessFactory{

    /**
     * Gets the BusDataAccess instance
     * @returns {BusDataAccess}
     */
    static getBusDataAccess(){
        "use strict";
        return new BusDataAccess();
    }

    /**
     * Gets the LogDataAccess instance
     * @returns {LogDataAccess}
     */
    static getLogDataAccess(){
        "use strict";
        return new LogDataAccess();
    }

    /**
     * Gets the ItineraryDataAccess instance
     * @returns {ItineraryDataAccess}
     */
    static getItineraryDataAccess(){
        "use strict";
        return new ItineraryDataAccess();
    }

    /**
     * Gets the ReportDataAccess instance
     * @returns {ReportDataAccess}
     */
    static getReportDataAccess(){
        "use strict";
        return new ReportDataAccess();
    }
}