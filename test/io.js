let assert = require("assert");

describe("Tests if can do IO nodejs operations", function() {

    it("tests if can access node module", function(done) {
        "use strict";
        let fs = require('fs');
        assert.notEqual(Object.keys(fs).length, 0);
        done();
    });
});