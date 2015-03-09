import {MainBusiness} from '../business/main';

export class MainService{

    parseQueryData(query){
        "use strict";
        let main = new MainBusiness();
        return main.parseQueryData(query);
    }

}