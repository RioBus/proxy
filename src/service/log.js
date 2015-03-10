import {BusinessFactory} from '../business/businessfactory';

export class LogService{

    prepareLogToSend(){
        "use strict";
        let business = BusinessFactory.getLogBusiness();
        return business.prepareLogToSend();
    }
}