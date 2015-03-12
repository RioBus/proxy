import {DataRetrieverService} from './dataretriever';
import {DataServerService} from './dataserver';
import {LogService} from './log';
import {MainService} from './main';

export class ServiceFactory{

    static getDataRetrieverService(){
        "use strict";
        return new DataRetrieverService();
    }

    static getDataServerService(){
        "use strict";
        return new DataServerService();
    }

    static getLogService(){
        "use strict";
        return new LogService();
    }

    static getMainService(){
        "use strict";
        return new MainService();
    }
}