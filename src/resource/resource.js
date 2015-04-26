import {Factory} from '../common/factory';
let Strings = Factory.getStrings();

/**
 * Resource type superclass
 *
 * Defines the Resource type and it's characteristics
 * @class Resource
 */
export class Resource{

    /**
     * Request URL
     * @returns {string}
     */
    route(){
        return '/';
    }

    /**
     * GET method handler
     *
     * @param request
     * @param response
     * @param next
     */
    get(request, response, next) {
        response.json({
            type: Strings.keyword.error,
            message: Strings.resource.parent.response.error.message
        });
    }

    /**
     * POST method handler
     *
     * @param request
     * @param response
     * @param next
     */
    post(request, response, next) {
        response.json({
            type: Strings.keyword.error,
            message: Strings.resource.parent.response.error.message
        });
    }

    /**
     * PUT method handler
     *
     * @param request
     * @param response
     * @param next
     */
    put(request, response, next) {
        response.json({
            type: Strings.keyword.error,
            message: Strings.resource.parent.response.error.message
        });
    }

    /**
     * DELETE method handler
     *
     * @param request
     * @param response
     * @param next
     */
    delete(request, response, next) {
        response.json({
            type: Strings.keyword.error,
            message: Strings.resource.parent.response.error.message
        });
    }
}