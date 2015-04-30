/// <reference path="../../defs/node/node.d.ts" />
import IResource = require("./iresource");
/**
 * Resource type superclass
 *
 * Defines the Resource type and it's characteristics
 * @class Main
 */
class Main implements IResource{

    /**
     * Request URL
     */
    route:string = "/";

    /**
     * GET method handler
     *
     * @param request
     * @param response
     * @param next
     */
    get(request, response, next):void {
        response.json({type: "error", message: "Operation not implemented"});
    }

    /**
     * POST method handler
     *
     * @param request
     * @param response
     * @param next
     */
    post(request, response, next):void {
        response.json({type: "error", message: "Operation not implemented"});
    }

    /**
     * PUT method handler
     *
     * @param request
     * @param response
     * @param next
     */
    put(request, response, next):void {
        response.json({type: "error", message: "Operation not implemented"});
    }

    /**
     * DELETE method handler
     *
     * @param request
     * @param response
     * @param next
     */
    delete(request, response, next):void {
        response.json({type: "error", message: "Operation not implemented"});
    }
}
export = Main;