import {ServiceFactory} from '../src/service/factory';

let assert = require("assert");

describe("Itineraries search", function() {

    it("should get 485 itinerary", function(done) {
        "use strict";
        let line = "485";
        let service = ServiceFactory.getItineraryService();
        let itinerary = service.getItinerary(line);
        assert(itinerary.length > 0);
        done();
    });

    it("should get no itinerary for unknown line", function(done) {
        "use strict";
        let line = "sajhsjak";
        let service = ServiceFactory.getItineraryService();
        let itinerary = service.getItinerary(line);
        assert.equal(itinerary.length, 0);
        done();
    });
});