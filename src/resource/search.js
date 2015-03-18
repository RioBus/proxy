import {Resource} from './resource';
import {Factory} from '../common/factory';
import {ServiceFactory} from '../service/factory';

export class SearchResource extends Resource{

    route(){
        "use strict";
        return '/search/:platformId/:lines';
    }

    get(request, response, next){
        let service = ServiceFactory.getSearchService();
        let result = service.parseQueryData(request);
        response.json(result);
    }
}
