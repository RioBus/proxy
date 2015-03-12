import {Resource} from './resource';
import {Factory} from '../common/factory';
import {ServiceFactory} from '../service/servicefactory';

export class MainResource extends Resource{

    route(){
        "use strict";
        return '/search/:platformId/:lines';
    }

    get(request, response, next){
        let service = ServiceFactory.getMainService();
        let result = service.parseQueryData(request);
        response.jsonp(result);
    }
}
