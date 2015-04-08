import {BusinessFactory} from '../business/factory';

/**
 * Provides an inteface to Report business logics
 * @class ReportsService
 */
export class ReportService{

    /**
     * Accesses the report internal data
     * @param params
     * @returns {*}
     */
    getByDate(params){
        let date = {
            min: request.params.minDate,
            max: request.params.maxDate
        }; // date default: YYYYMMDDHH

        let business = BusinessFactory.getReportBusiness();
        return business.getByDate(date);
    }
}