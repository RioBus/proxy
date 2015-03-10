import {BusinessFactory} from '../business/businessfactory';

export class MainService{

    parseQueryData(query){
        "use strict";
        let business = BusinessFactory.getMainBusiness();
        return business.parseQueryData(query);
    }

    getAllData(){
        "use strict";
        let business = BusinessFactory.getAllDataBusiness();
        return business.getAllData();
    }

}