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
    public route:string = "/";

    /**
     * GET method handler
     *
     * @param request
     * @param response
     * @param next
     */
    public get(request:any, response:any, next:any): void {
        response.json({type: "error", message: "Operation not implemented"});
    }

    /**
     * POST method handler
     *
     * @param request
     * @param response
     * @param next
     */
    public post(request:any, response:any, next:any): void {
        response.json({type: "error", message: "Operation not implemented"});
    }

    /**
     * PUT method handler
     *
     * @param request
     * @param response
     * @param next
     */
    public put(request:any, response:any, next:any): void {
        response.json({type: "error", message: "Operation not implemented"});
    }

    /**
     * DELETE method handler
     *
     * @param request
     * @param response
     * @param next
     */
    public delete(request:any, response:any, next:any): void {
        response.json({type: "error", message: "Operation not implemented"});
    }
}
export = Main;