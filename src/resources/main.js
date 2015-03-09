import {Resource} from './resource';
import {AbstractFactory} from '../common/abstractfactory';

export class MainResource extends Resource{

    get(request, response, next){
        let logger = AbstractFactory.logger;
        logger.info("User's referer is: " + req.headers['referer']);

        response.jsonp({greet: 'Hello Nodelicious!'});
    }
}
