import IResource = require("../iResource");
import IService  = require("../../service/iService");
import $inject   = require("../../core/inject");
import BusStopService = require("../../service/busStopService");
/**
 * BusStopResource class
 *
 * Defines a Resource and it's characteristics
 * @class BusStopResource
 */
class BusStopResource implements IResource{
    
    public constructor(private context: IService = $inject("service/busStopService")) {}

    /**
     * GET method handler
     *
     * @param request
     * @param response
     * @param next
     */
    public get(request: any, response: any, next: any): void {
        var line: string = request.params.line;
        var output: any = this.context.retrieve(line);
        if(output===null) output = {};
        response.jsonp(output);
    }

    /**
     * POST method handler
     *
     * @param request
     * @param response
     * @param next
     */
    public post(request: any, response: any, next: any): void {
        response.json({type: "error", message: "Operation not implemented"});
    }

    /**
     * PUT method handler
     *
     * @param request
     * @param response
     * @param next
     */
    public put(request: any, response: any, next: any): void {
        response.json({type: "error", message: "Operation not implemented"});
    }

    /**
     * DELETE method handler
     *
     * @param request
     * @param response
     * @param next
     */
    public delete(request: any, response: any, next: any): void {
        response.json({type: "error", message: "Operation not implemented"});
    }
}
export = BusStopResource;