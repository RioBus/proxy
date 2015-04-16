import {Factory} from '../src/common/factory';

let assert = require('assert');

describe("Reads the config file", function() {

    it("accesses name", function(done) {
        "use strict";
        let config = Factory.getConfig();
        assert.equal(config.projectName, "Nodelicious");

        done();
    });
});
