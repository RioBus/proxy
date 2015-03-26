import {BusDataAccess} from './bus';
import {LogDataAccess} from './log';
import {ServerDataAccess} from './server';
import {ItineraryDataAccess} from './itinerary';

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
     * Gets the ServerDataAccess instance
     * @returns {ServerDataAccess}
     */
    static getServerDataAccess(){
        "use strict";
        return new ServerDataAccess();
    }

    /**
     * Gets the ItineraryDataAccess instance
     * @returns {ItineraryDataAccess}
     */
    static getItineraryDataAccess(){
        "use strict";
        return new ItineraryDataAccess();
    }
}