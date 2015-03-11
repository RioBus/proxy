import {Resource} from './resource';
import {Factory} from '../common/factory';
import {ServiceFactory} from '../service/servicefactory';

let Strings = require('../strings');

export class MainResource extends Resource{

    get(request, response, next){
        let logger = Factory.getLogger();
        logger.info(Strings.resource.main.log.referrer + request.headers['referrer']);

        let service = ServiceFactory.getMainService();
        let result = service.parseQueryData(request.query);
        if(result) response.jsonp(result);
        else next();
    }
}
