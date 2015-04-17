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
        let lines = "663, 386";
        let buses = service.parseQueryData(lines, platformId);
        assert(buses.length > 0);
        done();
    });

    it("should find buses for [486, 663, 123] search", function(done){
        "use strict";
        let lines = "486,     663, 123";
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

    it("tests search by code", function(done) {
        "use strict";
        this.timeout(10000); // increasing timeout

        let search1 = "B31083";
        let search2 = "B31083, B31050";
        let search3 = "B31078,     B31153, B31137";
        let search4 = "B99999";
        let search5 = "D30019";

        let service = ServiceFactory.getSearchService();
        let platformId = 0;

        let buses1 = service.parseQueryData(search1, platformId);
        assert(buses1.length > 0);

        let buses2 = service.parseQueryData(search2, platformId);
        assert(buses2.length > 0);

        let buses3 = service.parseQueryData(search3, platformId);
        assert(buses3.length > 0);

        let buses4 = service.parseQueryData(search4, platformId);
        assert(buses4.length === 0);

        let buses5 = service.parseQueryData(search5, platformId);
        assert(buses5.length > 0);
        done();
    });

    it("tests search by without line", function(done) {
        "use strict";
        let search1 = "B75668";
        let search2 = "B75668, B31083"; // without and with line

        let service = ServiceFactory.getSearchService();
        let platformId = 0;

        let buses1 = service.parseQueryData(search1, platformId);
        assert(buses1.length > 0);

        let buses2 = service.parseQueryData(search2, platformId);
        assert(buses2.length > 0);
        done();
    });
});