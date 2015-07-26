/// <reference path="../../../defs/tsd.d.ts" />
import IResource = require("../iResource");
import IService  = require("../../service/iService");
import LogType   = require("../../common/logType");
import $inject   = require("../../core/inject");
/**
 * ItineraryResource class
 *
 * Defines a Resource and it's characteristics
 * @class ItineraryResource
 */
class DataProviderLogResource implements IResource{
    
    public constructor(private context: IService = $inject("service/logService")) {}

    /**
     * GET method handler
     *
     * @param request
     * @param response
     * @param next
     */
    public get(request: any, response: any, next: any): void {
        var lines: string = request.params.lines;
        response.set('Content-Type', 'text/plain');
        response.send(this.context.retrieve(LogType.DATA_PROVIDER, lines));
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
export = DataProviderLogResource;