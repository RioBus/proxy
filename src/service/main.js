import {MainBusiness} from '../business/main';
import {AllDataBusiness} from '../business/alldata';

export class MainService{

    parseQueryData(query){
        "use strict";
        let business = new MainBusiness();
        return business.parseQueryData(query);
    }

    getAllData(){
        "use strict";
        let business = new AllDataBusiness();
        return business.getAllData();
    }

}