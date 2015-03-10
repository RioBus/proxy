import {DataRetrieverBusiness} from '../business/dataretriever';

export class DataRetrieverService{

    retrieveData(status, logger, config){
        "use strict";
        let business = new DataRetrieverBusiness(config, logger, status);
        business.retrieveData();
    }

}