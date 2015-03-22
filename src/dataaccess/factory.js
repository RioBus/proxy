import {BusDataAccess} from './bus';
import {LogDataAccess} from './log';
import {ServerDataAccess} from './server';
import {ItineraryDataAccess} from './itinerary';

export class DataAccessFactory{

    static getBusDataAccess(){
        "use strict";
        return new BusDataAccess();
    }

    static getLogDataAccess(){
        "use strict";
        return new LogDataAccess();
    }

    static getServerDataAccess(){
        "use strict";
        return new ServerDataAccess();
    }

    static getItineraryDataAccess(){
        "use strict";
        return new ItineraryDataAccess();
    }
}