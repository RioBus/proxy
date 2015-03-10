import {Resource} from './resource';
import {ServiceFactory} from '../service/servicefactory';

export class LogResource extends Resource{

    route(){
        "use strict";
        return '/log';
    }

    get(request, response, next){
        "use strict";
        response.send(ServiceFactory.getLogService().prepareLogToSend());
    }

}