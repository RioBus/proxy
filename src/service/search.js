import {BusinessFactory} from '../business/factory';

/**
 * Provides an interface to the Bus Search business logic
 * @class SearchService
 */
export class SearchService{

    /**
     * Parse the request and retrieves the bus data
     * @param {string} lines
     * @param {number} platformId
     * @returns {Array}
     */
    parseQueryData(lines, platformId){
        "use strict";
        let business = BusinessFactory.getSearchBusiness();
        let buses = business.getDataByLine(lines, platformId);
        if(buses.length>0) return buses;
        return business.getDataByCode(lines, platformId);
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
     * Retrieves all bus data
     * @returns {Array}
     */
    getSampleData(){
        "use strict";
        let business = BusinessFactory.getSearchBusiness();
        return business.getSampleData();
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