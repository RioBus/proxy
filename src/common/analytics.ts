declare var require;

/**
 * Implements Google Analytics tracking system
 *
 * @class Analytics
 * @constructor
 */
class Analytics{
	
	private driver: any;

    public constructor(private ua?: string, private host?: string){
        this.driver = require("nodealytics");
    }
    
    /**
     * Checks if the configuration is set. If not, avoids the execution.
     * @return {boolean}
     */
    private isDisabled(): boolean {
        return (!this.ua || !this.host);
    }

    /**
     * Starts the tracking service
     * @param {Function} callback (params: error, response)
     */
    public initialize(callback?: (params: Error, response: any) => void): void {
        if(this.isDisabled()) return;
        if(callback===undefined) callback = function(){};
        this.driver.initialize(this.ua, this.host, callback);
    }

    /**
     * Tracks the request to a given page
     *
     * @param {String} id Tracking identifier
     * @param {String} path Request path
     * @param {Function} callback (params: error, response)
     */
    public trackPage(id: string, path: string, callback: (params: Error, response: any) => void): void {
        if(this.isDisabled()) return;
        this.driver.trackPage(id, path, callback);
    }

    /**
     * Tracks a given event
     *
     * @param {String} id Tracking identifier
     * @param {String} path Request path
     * @param {String} label Event label
     * @param {Function} callback (params: error, response)
     */
    public trackEvent(id: string, path: string, label: string, callback: (params: Error, response: any) => void): void {
        if(this.isDisabled()) return;
        this.driver.trackEvent(id, path, label, callback);
    }
}
export = Analytics;