'use strict';
var Factory = require("../src/common/factory");
/* global describe, it; */

let assert = require('assert');

describe("Config file reader", function() {

    it("should get the project name", function(done) {
        let config = Factory.getConfig();
        assert.equal(config.projectName, "Nodelicious");
        done();
    });
});
