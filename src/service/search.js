import {BusinessFactory} from '../business/factory';

export class SearchService{

    parseQueryData(request){
        "use strict";
        let business = BusinessFactory.getMainBusiness();
        return business.parseQueryData(request);
    }

    getAllData(){
        "use strict";
        let business = BusinessFactory.getAllDataBusiness();
        return business.getAllData();
    }

}