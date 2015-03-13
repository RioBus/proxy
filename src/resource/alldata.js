import {Resource} from './resource';
import {ServiceFactory} from '../service/factory';

export class AllDataResource extends Resource{

    route(){
        "use strict";
        return '/search';
    }

    get(request, response, next) {
        let result = ServiceFactory.getSearchService().getAllData();
        response.json(result);
    }
}