import {ServiceFactory} from '../src/service/factory';

let assert = require('assert');

describe("Search tests", function() {

    it("tests search by line", function(done) {
        "use strict";
        let search1 = "485";
        let search2 = "663, 386";
        let search3 = "486,     663, 123";
        let search4 = "9999";
        let search5 = "bdkjbaskd";

        let service = ServiceFactory.getSearchService();
        let platformId = 0;

        let buses1 = service.parseQueryData(search1, platformId);
        assert(buses1.length > 0);

        let buses2 = service.parseQueryData(search2, platformId);
        assert(buses2.length > 0);

        let buses3 = service.parseQueryData(search3, platformId);
        assert(buses3.length > 0);

        let buses4 = service.parseQueryData(search4, platformId);
        assert.equal(buses4.length, 0);

        let buses5 = service.parseQueryData(search5, platformId);
        assert.equal(buses5.length, 0);

        done();
    });

    it("tests search by code", function(done) {
        "use strict";
        let search1 = "B31083";
        let search2 = "B31083, B31050";
        let search3 = "B31078,     B31153, B31137";
        let search4 = "B99999";

        let service = ServiceFactory.getSearchService();
        let platformId = 0;

        let buses1 = service.parseQueryData(search1, platformId);
        assert(buses1.length > 0);

        let buses2 = service.parseQueryData(search2, platformId);
        assert(buses2.length > 0);

        let buses3 = service.parseQueryData(search3, platformId);
        assert(buses3.length > 0);

        let buses4 = service.parseQueryData(search4, platformId);
        assert.equal(buses4.length, 0);

        done();
    });

    it("tests search by without line", function(done) {
        "use strict";
        let search = "B71071";

        let service = ServiceFactory.getSearchService();
        let platformId = 0;

        let buses = service.parseQueryData(search, platformId);
        assert(buses.length > 0);

        done();
    });
});