import {Resource} from './resource';
import {ServiceFactory} from '../service/factory';

export class DataProviderLogResource extends Resource{

    route(){
        "use strict";
        return '/log/dataprovider';
    }

    get(request, response, next){
        "use strict";
        let service = ServiceFactory.getLogService();
        response.set('Content-Type', 'text/plain');
        response.send(service.getDataProviderLog());
    }
}