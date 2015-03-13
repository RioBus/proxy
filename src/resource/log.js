import {Resource} from './resource';
import {ServiceFactory} from '../service/factory';

export class LogResource extends Resource{

    route(){
        "use strict";
        return '/log';
    }

    get(request, response, next){
        "use strict";
        let service = ServiceFactory.getLogService();
        response.set('Content-Type', 'text/plain');
        response.send(service.getRuntimeLog());
    }

}