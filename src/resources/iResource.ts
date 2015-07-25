/**
 * Classes whose implements this interface are used for dealing with REST requests.
 * Each method represents the operation over the HTTP method for a given path defined
 * in Config class.
 * 
 * @interface IResource 
 */
interface IResource {

    /**
     * GET method handler
     *
     * @param request
     * @param response
     * @param next
     */
	get(request: any, response: any, next: any): void;

    /**
     * POST method handler
     *
     * @param request
     * @param response
     * @param next
     */
	post(request: any, response: any, next: any): void;

    /**
     * PUT method handler
     *
     * @param request
     * @param response
     * @param next
     */
	put(request: any, response: any, next: any): void;

    /**
     * DELETE method handler
     *
     * @param request
     * @param response
     * @param next
     */
	delete(request: any, response: any, next: any): void;
}
export = IResource;