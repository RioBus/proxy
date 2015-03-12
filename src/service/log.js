import {BusinessFactory} from '../business/factory';

export class LogService{

    prepareLogToSend(){
        "use strict";
        let business = BusinessFactory.getLogBusiness();
        return business.prepareLogToSend();
    }
}