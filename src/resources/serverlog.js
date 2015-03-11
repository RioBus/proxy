import {Resource} from './resource';

export class ServerLogResource extends Resource{

    route(){
        "use strict";
        return '/log/server';
    }

    get(request, response, next){
        "use strict";
    }
}