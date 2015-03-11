import {Resource} from './resource';
import {ServiceFactory} from '../service/servicefactory';

export class AllDataResource extends Resource{

    route(){
        "use strict";
        return '/all';
    }

    get(request, response, next) {
        let result = ServiceFactory.getMainService().getAllData();
        console.log(result);
        response.json(result);
    }
}