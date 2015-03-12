import {BusinessFactory} from '../business/factory';

export class DataRetrieverService{

    retrieveData(status){
        "use strict";
        BusinessFactory.getDataRetrieverBusiness().retrieveData(status);
    }

}