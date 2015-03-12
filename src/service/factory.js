import {LogService} from './log';
import {SearchService} from './search';

export class ServiceFactory{

    static getLogService(){
        "use strict";
        return new LogService();
    }

    static getSearchService(){
        "use strict";
        return new SearchService();
    }
}