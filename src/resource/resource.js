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
        response.json({type: "error", message: "Operation not implemented"});
    }

    /**
     * POST method handler
     *
     * @param request
     * @param response
     * @param next
     */
    post(request, response, next) {
        response.json({type: "error", message: "Operation not implemented"});
    }

    /**
     * PUT method handler
     *
     * @param request
     * @param response
     * @param next
     */
    put(request, response, next) {
        response.json({type: "error", message: "Operation not implemented"});
    }

    /**
     * DELETE method handler
     *
     * @param request
     * @param response
     * @param next
     */
    delete(request, response, next) {
        response.json({type: "error", message: "Operation not implemented"});
    }
}