import {LogBusiness} from './log';
import {SearchBusiness} from './search';
import {ServerBusiness} from './server';

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

}