import {Utils} from './common/utils';
import {Factory} from './common/factory';
import {ServiceFactory} from './service/servicefactory';

export class DataRequirer{

    static main(){
        "use strict";
        let logger = Factory.getLogger();

        logger.setEvent('error', DataRequirer.errorEvent);

        var lastStatus = {
            label: null,
            counter: 0
        }

        let retriever = ServiceFactory.getDataRetrieverService();;
        retriever.retrieveData(lastStatus);
    }

    static errorEvent(e){
        "use strict";
        console.log(e);
    }
}