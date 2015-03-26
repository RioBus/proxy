import {BusinessFactory} from '../business/factory';

/**
 * Provides an interface to the Server business logic
 * @class ServerService
 */
export class ServerService{

    /**
     * Accesses the business logic to access and store all the bus data in the local
     * storage.
     */
    storeAllData(){
        "use strict";
        BusinessFactory.getServerBusiness().storeAllData();
    }
}