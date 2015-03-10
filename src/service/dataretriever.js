import {BusinessFactory} from '../business/businessfactory';

export class DataRetrieverService{

    retrieveData(status){
        "use strict";
        BusinessFactory.getDataRetrieverBusiness().retrieveData(status);
    }

}