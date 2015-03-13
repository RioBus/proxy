import {LogService} from './log';
import {SearchService} from './search';
import {ServerService} from './server';

export class ServiceFactory{

    static getLogService(){
        "use strict";
        return new LogService();
    }

    static getSearchService(){
        "use strict";
        return new SearchService();
    }

    static getServerService(){
        "use strict";
        return new ServerService();
    }
}