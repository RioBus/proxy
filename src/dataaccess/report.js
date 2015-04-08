/**
 * Report data access
 *
 * @class ReportDataAccess
 * @constructor
 */
export class ReportDataAccess{

    constructor(){
        this.config = Factory.getConfig();
        this.logger = Factory.getLogger();
    }

    /**
     * Accesses the report internal data
     * @param date
     * @returns {*}
     */
    getByDate(date){
        let fs = require('fs');

        this.logger.info("Date interval: " + date.min+"-"+date.max);
        let files = fs.readdirSync(this.config.projectRoot+this.config.server.reportFilePath).sort();
        this.logger.info("Files: "+files);

        var response = "";
        for(var fileName of files){
            fileName = fileName.split('.')[0];
            if(fileName >= date.min && fileName <= date.max)
                response += fs.readFileSync(this.config.projectRoot+this.config.server.reportFilePath+'/'+fileName)+"\n,";
        }
        if(response[response.length-1]==',') response = response.slice(0, -1);
        response = '['+response+']';

        return JSON.parse(response);
    }

    storeData(data){}
}