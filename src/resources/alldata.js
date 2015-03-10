import {Resource} from './resource';
import {MainService} from '../service/main';

export class AllDataResource extends Resource{

    route(){
        "use strict";
        return '/all';
    }

    get(request, response, next) {
        let main = new MainService();
        let result = main.getAllData();
        response.json(result);
    }
}