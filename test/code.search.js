import {ServiceFactory} from '../src/service/factory';

let assert = require('assert');

describe("Order search test", function() {

    let service = ServiceFactory.getSearchService();
    let platformId = 0;

    it("should find a bus for B31083 search", function(done){
        "use strict";
        let order = "B31083";
        let bus = service.parseQueryData(order, platformId);
        assert.equal(bus.length, 1);
        done();
    });

    it("should find a bus for D30019 search", function(done){
        "use strict";
        let order = "D30019";
        let bus = service.parseQueryData(order, platformId);
        assert.equal(bus.length, 1);
        done();
    });

    it("should find a bus without line for A41170 search", function(done){
        "use strict";
        let order = "A41170";
        let bus = service.parseQueryData(order, platformId);
        assert.equal(bus.length, 1);
        assert.equal(bus[0].line, "indefinido");
        done();
    });

    it("should not find buses for B99999 search", function(done){
        "use strict";
        let order = "B99999";
        let bus = service.parseQueryData(order, platformId);
        assert.equal(bus.length, 0);
        done();
    });

    it("should find buses without line and then for bus with line through [B44561, D30019] search", function(done){
        "use strict";
        let orders = "B44561,D30019";
        let buses = service.parseQueryData(orders, platformId);
        assert.equal(buses.length, 2);
        assert.equal(buses[0].line, "indefinido");
        assert.notEqual(buses[1].line, "indefinido");
        done();
    });

    it("should find buses for [B31083, B31050] search", function(done){
        "use strict";
        let orders = "B31083,B31050";
        let buses = service.parseQueryData(orders, platformId);
        assert.equal(buses.length, 2);
        done();
    });

    it("should find buses for [B31151, B31116, B31098] search", function(done){
        "use strict";
        let orders = "B31151,B31116,B31098";
        let buses = service.parseQueryData(orders, platformId);
        assert.equal(buses.length, 3);
        done();
    });
});