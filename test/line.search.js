import {ServiceFactory} from '../src/service/factory';

let assert = require('assert');

describe("Line search test", function() {

    let service = ServiceFactory.getSearchService();
    let platformId = 0;

    it("should find buses for 485 search", function(done){
        "use strict";
        let line = "485";
        let buses = service.parseQueryData(line, platformId);
        assert(buses.length > 0);
        done();
    });

    it("should find buses for SV790 search", function(done){
        "use strict";
        let line = "SV790";
        let buses = service.parseQueryData(line, platformId);
        assert(buses.length > 0);
        done();
    });

    it("should find buses for [663, 386] search", function(done){
        "use strict";
        let lines = "663,386";
        let buses = service.parseQueryData(lines, platformId);
        assert(buses.length > 0);
        done();
    });

    it("should find buses for [486, 663, 123] search", function(done){
        "use strict";
        let lines = "486,663,123";
        let buses = service.parseQueryData(lines, platformId);
        assert(buses.length > 0);
        done();
    });

    it("should not find buses for 9999 search", function(done){
        "use strict";
        let line = "9999";
        let buses = service.parseQueryData(line, platformId);
        assert(buses.length === 0);
        done();
    });

    it("should not find buses for thrash search", function(done){
        "use strict";
        let line = "cabkca";
        let buses = service.parseQueryData(line, platformId);
        assert(buses.length === 0);
        done();
    });
});