import {DataAccessFactory} from '../dataaccess/factory';

/**
 * Report business logics
 *
 * @class ReportBusiness
 */
export class ReportBusiness{

    /**
     * Accesses the report internal data
     * @param date
     * @returns {*}
     */
    getByDate(date){
        let dataAccess = DataAccessFactory.getReportDataAccess();
        return dataAccess.getByDate(date);
    }
}