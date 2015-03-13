import {BusinessFactory} from '../business/factory';

export class ServerService{

    storeAllData(){
        "use strict";
        BusinessFactory.getServerBusiness().storeAllData();
    }
}