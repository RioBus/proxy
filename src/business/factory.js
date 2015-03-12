import {LogBusiness} from './log';
import {SearchBusiness} from './search';

import {Factory} from '../common/factory';

export class BusinessFactory{

    static getLogBusiness(){
        "use strict";
        return new LogBusiness();
    }

    static getSearchBusiness(){
        "use strict";
        return new SearchBusiness();
    }

}