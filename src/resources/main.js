import {Resource} from '../resources/resource';

export class MainResource extends Resource{

    get(request, response, next){
	console.log(request);
        var json = {greet: 'hello world!!'};
        response.jsonp(json);
        console.log(JSON.stringify(json));
    }
}
