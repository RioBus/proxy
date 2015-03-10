import {Resource} from './resource';

export class LogResource extends Resource{

    route(){
        "use strict";
        return '/log';
    }

    get(request, response, next){
        "use strict";

    }

}