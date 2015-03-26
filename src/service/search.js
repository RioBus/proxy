import {BusinessFactory} from '../business/factory';

/**
 * Provides an interface to the Bus Search business logic
 * @class SearchService
 */
export class SearchService{

    /**
     * Parse the request and retrieves the bus data
     * @param {*} request
     * @returns {Array}
     */
    parseQueryData(request){
        "use strict";
        let business = BusinessFactory.getSearchBusiness();
        return business.parseQueryData(request);
    }

    /**
     * Retrieves all bus data
     * @returns {Array}
     */
    getAllData(){
        "use strict";
        let business = BusinessFactory.getSearchBusiness();
        return business.getAllData();
    }

    /**
     * Retrieves the last data update timestamp
     * @returns {String}
     */
    getLastUpdateTime(){
        "use strict";
        let business = BusinessFactory.getSearchBusiness();
        return business.getLastUpdate();
    }

}