import {Resource} from '../lib/Resource';

export class MainResource extends Resource{

    get(request, response, next){
        var json = { greet: "hello world!"};
        response.jsonp(json);
        console.log(JSON.stringify(json));
    }
}