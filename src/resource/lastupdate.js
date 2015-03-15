import {ServiceFactory} from '../service/factory';

export class LastUpdate{

    route(){
        "use strict";
        return '/lastupdate';
    }

    get(request, response, next){
        "use strict";
        let service = ServiceFactory.getSearchService();
        response.set('Content-Type', 'text/plain');
        response.send(service.getLastUpdateTime());
    }
}