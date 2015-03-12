import {Resource} from './resource';
import {ServiceFactory} from '../service/factory';

export class AllDataResource extends Resource{

    route(){
        "use strict";
        return '/all';
    }

    get(request, response, next) {
        let result = ServiceFactory.getMainService().getAllData();
        response.json(result);
    }
}