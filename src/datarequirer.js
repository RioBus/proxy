import {Utils} from './common/utils';
import {Factory} from './common/factory';
import {ServiceFactory} from './service/factory';

export class DataRequirer{

    static main(argv){
        "use strict";
        Factory.getLogger().setEvent('error', function(e){
            console.log(e);
        });

        var lastStatus = {
            label: null,
            counter: 0
        };

        let retriever = ServiceFactory.getDataRetrieverService();
        retriever.retrieveData(lastStatus);
    }
}