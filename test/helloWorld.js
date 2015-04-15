import {Factory} from '../src/common/factory';

describe("Reads the config file", function() {

    it("accesses name", function() {
        "use strict";
        let config = Factory.getConfig();
        expect(config.projectName).toEqual("Nodelicious");
    });

    it("says hello world", function() {
        "use strict";
        expect("Hello World").toEqual("Hello World");
    });
});
