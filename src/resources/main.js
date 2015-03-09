import {Resource} from './resource';
import {AbstractFactory} from '../common/abstractfactory';
import {MainService} from '../service/main';

let Strings = require('../strings');

export class MainResource extends Resource{

    get(request, response, next){
        let logger = AbstractFactory.logger;
        logger.info(Strings.resource.main.log.referrer + req.headers['referer']);

        let service = new MainService();
        let result = service.parseQueryData(request.query);

        if(result) response.jsonp(result);
        else next();
    }
}
