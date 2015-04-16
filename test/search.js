import {ServiceFactory} from '../src/service/factory';

let assert = require('assert');

describe("Search tests", function() {

    it("tests search by line", function() {
        "use strict";
        let search1 = "485";
        let search2 = "663, 386";
        let search3 = "486,     663, 123";
        let search4 = "9999";
        let search5 = "bdkjbaskd";

        let service = ServiceFactory.getSearchService();
        let platformId = 3;

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
    });

    it("tests search by code", function() {
        "use strict";
        assert(true);
    });

    it("tests search by without line", function() {
        "use strict";
        assert(true);
    });
});