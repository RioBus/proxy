import {Resource} from './resource';

export class SearchResource extends Resource{

    route(){
        "use strict";
        return '/busca/:busca';
    }

    get(request, response, next){
        "use strict";

    }
}