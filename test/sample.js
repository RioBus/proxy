import {Factory} from '../src/common/factory';

let assert = require('assert');

describe("Config file reader", function() {

    it("should get the project name", function(done) {
        "use strict";
        let config = Factory.getConfig();
        assert.equal(config.projectName, "Nodelicious");
        done();
    });
});
