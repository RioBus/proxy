import {Resource} from './resource';

export class MainResource extends Resource{

    get(request, response, next){
        response.jsonp({greet: 'Hello Nodelicious!'});
    }
}
