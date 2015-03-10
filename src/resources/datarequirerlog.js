import {Resource} from './resource';

export class DataReuirerResource extends Resource{

    route(){
        "use strict";
        return '/log/dataGrabber';
    }

    get(request, response, next){
        "use strict";

    }
}