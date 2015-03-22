import {LogBusiness} from './log';
import {SearchBusiness} from './search';
import {ServerBusiness} from './server';
import {ItineraryBusiness} from './itinerary';

export class BusinessFactory{

    static getLogBusiness(){
        "use strict";
        return new LogBusiness();
    }

    static getSearchBusiness(){
        "use strict";
        return new SearchBusiness();
    }

    static getServerBusiness(){
        "use strict";
        return new ServerBusiness();
    }

    static getItineraryBusiness(){
        "use strict";
        return new ItineraryBusiness();
    }

}